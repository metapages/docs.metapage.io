import {
  parseAll,
  stringify as yamlStringify,
} from 'https://deno.land/std@0.182.0/encoding/yaml.ts';
import { walk } from 'https://deno.land/std@0.182.0/fs/mod.ts';

export const applyFrontMatterModification = (
  path: string,
  f: (frontMatter: Record<string, unknown>) => Record<string, unknown>,
): void => {
  const text: string = Deno.readTextFileSync(path);

  const frontMatterText = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1];
  if (frontMatterText) {
    const yaml = (parseAll(frontMatterText) as Record<string, unknown>[])?.[0];
    if (yaml) {
      const newYaml = f(yaml);
      const updatedText = text.replace(frontMatterText, yamlStringify(newYaml));
      Deno.writeTextFileSync(path, updatedText);
    }
  }
};

export const applyFrontMatterModificationToAll = async (args: {
  path: string;
  f: (frontMatter: Record<string, unknown>) => Record<string, unknown>;
}) => {
  const { path, f } = args;
  const st = await Deno.stat(path);
  if (st.isFile) {
    applyFrontMatterModification(path, f);
    return;
  }

  for await (const e of walk(path, {
    includeDirs: false,
    exts: [".md", ".mdx"],
  })) {
    if (e.isFile) {
      applyFrontMatterModification(e.path, f);
    }
  }
};

export const removeSidebar = (
  frontMatter: Record<string, unknown>,
): Record<string, unknown> => {
  if (frontMatter) {
    frontMatter["displayed_sidebar"] = null;
  }
  return frontMatter;
};

export const addAuthorToFrontMatter = (
  author: string,
  frontMatter: Record<string, string[]>,
): Record<string, string[]> => {
  if (frontMatter) {
    if (!frontMatter["authors"]) {
      frontMatter["authors"] = [];
    }
    if (!frontMatter["authors"].includes(author)) {
      frontMatter["authors"].push(author);
    }
  }
  return frontMatter;
};

export const hideTableOfContents = (
  frontMatter: Record<string, unknown>,
): Record<string, unknown> => {
  if (frontMatter) {
    frontMatter["hide_table_of_contents"] = true;
  }
  return frontMatter;
};

export const hideTitle = (
  frontMatter: Record<string, unknown>,
): Record<string, unknown> => {
  if (frontMatter) {
    frontMatter["hide_title"] = true;
  }
  return frontMatter;
};

export const extractOgDataToFrontMatterAll = async (args: { path: string }) => {
  const { path } = args;
  const st = await Deno.stat(path);
  if (st.isFile) {
    applyFrontMatterModification(path, (fm) =>
      extractOgDataToFrontMatter(fm, path),
    );
    return;
  }
  for await (const e of walk(path, {
    includeDirs: false,
    exts: [".md", ".mdx"],
  })) {
    if (e.isFile) {
      applyFrontMatterModification(e.path, (fm) =>
        extractOgDataToFrontMatter(fm, e.path),
      );
    }
  }
};

export const extractOgDataToFrontMatter = (
  frontMatter: Record<string, unknown>,
  filePath: string,
): Record<string, unknown> => {
  if (!frontMatter) return frontMatter;

  const text = Deno.readTextFileSync(filePath);
  // Strip frontmatter to get body content
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, "");

  // Extract first image if not already set
  if (!frontMatter["image"]) {
    // Match ![alt](url) or [![alt](url)](link)
    const imgMatch = /!\[[^\]]*\]\(([^)]+)\)/.exec(body);
    if (imgMatch?.[1]) {
      frontMatter["image"] = imgMatch[1];
    }
  }

  // Extract description if not already set
  if (!frontMatter["description"]) {
    // Find first non-empty paragraph (skip headings, images, blank lines)
    const lines = body.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (
        trimmed &&
        !trimmed.startsWith("#") &&
        !trimmed.startsWith("!") &&
        !trimmed.startsWith("[!") &&
        !trimmed.startsWith("[![") &&
        !trimmed.startsWith("```") &&
        !trimmed.startsWith("---")
      ) {
        // Strip markdown formatting for a clean description
        const cleaned = trimmed
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
          .replace(/[*_~`]/g, "") // bold/italic/strikethrough/code
          .trim();
        if (cleaned.length > 10) {
          frontMatter["description"] =
            cleaned.length > 160 ? cleaned.substring(0, 157) + "..." : cleaned;
          break;
        }
      }
    }
  }

  return frontMatter;
};

export const highlightSelfInMermaidDiagramsAll = async (args: {
  path: string;
  mermaidClass?: string;
}) => {
  const { path, mermaidClass } = args;

  const st = await Deno.stat(path);
  if (st.isFile) {
    await highlightSelfInMermaidDiagrams({ path, mermaidClass });
    return;
  }

  for await (const e of walk(path, {
    includeDirs: false,
    exts: [".md", ".mdx"],
  })) {
    if (e.isFile) {
      highlightSelfInMermaidDiagrams({ path: e.path, mermaidClass });
    }
  }
};

export const highlightSelfInMermaidDiagrams = async (args: {
  path: string;
  mermaidClass?: string;
}) => {
  let { path, mermaidClass } = args;
  mermaidClass =
    mermaidClass || "fill:#fff,stroke:#999999,stroke-width:2px,color:#000";

  let output: string = Deno.readTextFileSync(path);

  const re = /slug:(\s+.*(\/\S+))/g;
  const match = re.exec(output);
  if (!match || !match[2]) {
    return;
  }
  const slug = match[2];
  const mermaidRegex = new RegExp(
    `\\s*click\\s+([A-za-z][A-za-z0-9_-]*)\\s+"?.*${slug.replace("/", "\/")}"`,
    "g",
  );

  let mermaidMatch: RegExpExecArray | null;
  const lines = output.split("\n");
  lines.forEach((line, i) => {
    mermaidMatch = mermaidRegex.exec(line);
    if (!mermaidMatch || !mermaidMatch[1]) {
      return;
    }
    const nodeId = mermaidMatch[1];
    lines[i] = line.replace(
      mermaidMatch[0],
      `${mermaidMatch[0]}\n  style ${nodeId} ${mermaidClass}`,
    );
  });
  Deno.writeTextFileSync(path, lines.join("\n"));
};
