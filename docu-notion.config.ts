import {
  correctNotionUrlsInMermaid,
  embedToIframe,
  modifiedStandardInternalLinkConversion,
  notionColumnsUpgraded,
} from '@metapages/docu-notion-plugins';
import {
  IDocuNotionConfig,
  IDocuNotionContext,
  IPlugin,
  Log,
} from '@sillsdev/docu-notion';

Log.setLogLevel("verbose");

export const embedMetapagesCorrectly: IPlugin = {
  name: "properly embed metapages",
  regexMarkdownModifications: [
    {
      regex: /\[([^\]]+)?\]\((?!mailto:)(\/?[^),^\/]+)\)/,
      getReplacement: async (
        context: IDocuNotionContext,
        match: RegExpExecArray
      ): Promise<string> => {
        const slugPrefix = context.options.markdownOutputPath.split("/").pop();
        const label = match[1];
        let url = match[2];
        if (!url.startsWith(`/${slugPrefix}`)) {
          url = `/${slugPrefix}${url}`;
        }
        return `[${label}](${url})`;
      },
    },
  ],
};

export const modifyVideoEmbedding = {
  name: "Modify video embedding to use AutoplayReactPlayer",
  regexMarkdownModifications: [
    {
      regex: /<ReactPlayer\s+(controls)?\s+url=\"([^\"]+)\"[^>]*\/>/,
      getReplacement: async (
        context:IDocuNotionContext,
        match:RegExpExecArray
      ) => {
        const url = match[2];
        return `<AutoplayReactPlayer url=\"${url}\" />`;
      },
    },
  ],
};

const config: IDocuNotionConfig = {
  plugins: [
    modifiedStandardInternalLinkConversion,
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid(),
    embedToIframe,
    modifyVideoEmbedding,
    // embedMetapagesCorrectly,
  ],
};
export default config;
