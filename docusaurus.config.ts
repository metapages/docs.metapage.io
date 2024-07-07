import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const APP_HREF = process.env.APP_HREF || "https://app.metapage.io";

const config :Config = {
  title: "Metapages",
  tagline: "Simulations, workflows, and apps in the browser. Accelerrated scientific and engineering collaboration.",
  url: "https://docs.metapage.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "metapages", // Usually your GitHub org/user name.
  projectName: "docs.metapage.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["docusaurus2-dotenv"],

  // referenceSidebar: ['reference'],
  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/notion-to-markdown-columns.css"), require.resolve("./src/css/mpg.css"), ],
        },
      }),
    ],
  ],

  themeConfig:
    ({
      mermaid: {
        theme: {
          light: "neutral",
          dark: "forest",
        },
        options: {
          securityLevel: "loose",
          flowchart: {
            useMaxWidth: false,
            htmlLabels: false,
          },
        }
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'top',
      },
      metadata: [
        {
          name: "keywords",
          content: "metapages, javascript, code, workflow, app, evolution, superslides, gestures, hand control, deep time",
        },
      ],
      navbar: {
        title: "",
        logo: {
          alt: "Metapages Logo",
          src: "img/logo.svg",
          href: "/",
        },
        items: [
          {
            type: "doc",
            docId: "Getting-Started",
            position: "left",
            label: "Documentation",
          },
          // {
          //   to: "/docs/api",
          //   docId: "api",
          //   label: "APIs",
          //   position: "left",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/metapages/docs.metapage.io",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: APP_HREF,
            position: "right",
            // Copied and modified the button from: https://cssbuttons.app/buttons/60
            html: `<a href="${APP_HREF}/sign-up" style="background-color: #0F76D7; color: #FFF; font-weight: 600; position: relative; outline: none; border-radius: 6px; display: flex; justify-content: center; align-items: center; cursor: pointer; height: 40px; width: 120px;">Sign Up</a>`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs",
              },
              // {
              //   label: "About",
              //   to: "/about",
              // },
            ],
          },
          {
            title: "Live Examples",
            items: [
              {
                label: "Gallery",
                href: `${APP_HREF}`,
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/metapages",
              },
              {
                label: "Discord",
                href: "https://discord.gg/ATvFWMGKVZ",
              },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/metapagesapp",
              // },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Service",
                to: "/terms-of-service",
              },
              {
                label: "Privacy Policy",
                to: "/privacy-policy",
              },
              {
                label: "Data Deletion",
                to: "/data-deletion",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/metapages/docs.metapage.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} metapages, LLC. Built with Docusaurus.`,
      } satisfies Preset.ThemeConfig,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'python', 'typescript', 'javascript', 'yaml', 'markdown', 'mermaid'],
      },
    }),

    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'true',
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
        }
      },
    ]
  };

export default config;
