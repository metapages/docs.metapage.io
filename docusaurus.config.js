// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const APP_HREF = process.env.APP_HREF || "https://app.metapage.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Metapage Documentation",
  tagline: "Metapages: simulations and workflows in the cloud",
  url: "https://docs.metapage.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: {
          light: "neutral",
          dark: "forest",
        },
        // config: {
        //   // Mermaid config
        // }
      },
      metadata: [
        {
          name: "keywords",
          content: "metapages, javascript, code, workflow, app",
        },
      ],
      navbar: {
        title: "",
        logo: {
          alt: "Metapages Logo",
          src: "img/logo.svg",
          href: "/about"
        },
        items: [
          {
            type: "doc",
            docId: "Introduction/intro",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/docs/reference",
            docId: "reference",
            label: "Reference",
            position: "left",
          },
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
            html: `<a href="${APP_HREF}/sign-up" style="background-color: #32AEE4; color: #ffffff;  font-weight: 600; position: relative; outline: none; border-radius: 6px; display: flex; justify-content: center; align-items: center; cursor: pointer; height: 40px; width: 120px;">Sign Up</a>`,
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
                label: "Introduction",
                to: "/docs",
              },
              {
                label: "About",
                to: "/about",
              },
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
              {
                label: "Twitter",
                href: "https://twitter.com/metapagesapp",
              },
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
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
