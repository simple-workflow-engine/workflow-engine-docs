// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Simple Workflow Engine",
  tagline: "Workflow Engine For Developers",
  favicon: "img/favicon.png",
  markdown: {
    mermaid: true,
  },
  // Set the production url of your site here
  url: "https://workflow-engine-docs.pages.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "simple-workflow-engine", // Usually your GitHub org/user name.
  projectName: "workflow-engine-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

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
            "https://github.com/simple-workflow-engine/workflow-engine-docs/tree/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [],
          filename: "sitemap.xml",
        },
      }),
    ],
    [
      "redocusaurus",
      /** @type {import('redocusaurus').PresetOptions} */
      ({
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "openapi/openapi.json",
            route: "/api/",
            url: "https://workflow-engine.onrender.com/api",
            id: "api",
            config: "redocly.yaml",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Workflow Engine Docs",
        logo: {
          alt: "Workflow Engine Logo",
          src: "img/favicon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            label: "API",
            position: "left",
            to: "/api",
          },
          {
            href: "https://github.com/simple-workflow-engine/workflow-engine-docs",
            label: "GitHub",
            position: "right",
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
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/users/588309124010213396",
              },
              {
                label: "X (formally Twitter)",
                href: "https://twitter.com/nisarg_2001",
              },
            ],
          },
          {
            title: "Codebase",
            items: [
              {
                label: "Workflow Engine",
                href: "https://github.com/simple-workflow-engine/workflow-engine",
              },
              {
                label: "Workflow Engine UI - React",
                href: "https://github.com/simple-workflow-engine/workflow-engine-ui-r",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simple Workflow Engine. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
