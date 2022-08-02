// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEST Protocol',
  tagline: `NEST is a blockchain-based probability virtual machine (PVM) system with web3 applications of DeFi, GameFi, NFT built on it.`,
  url: 'https://www.nestprotocol.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NEST-Protocol', // Usually your GitHub org/user name.
  projectName: 'NEST-Protocol-Website', // Usually your repo name.
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/NEST-Protocol/NEST-Protocol-Website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/NEST-Protocol/NEST-Protocol-Website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: "G-ELV55124T4",
          anonymizeIP: false,
        },
        sitemap: {
          changefreq: 'daily',
          filename: "sitemap.xml",
        }
      }),
    ],
  ],
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            autoCollapseCategories: true,
          }
        },
        navbar: {
          logo: {
            alt: 'NEST Protocol Logo',
            src: 'img/logo.svg',
            style: {
              height: '20px',
            }
          },
          hideOnScroll: true,
          items: [
            {to: '/nest-fi', label: 'NEST Fi', position: 'right'},
            {
              type: 'doc',
              docId: 'NEST-PVM/Concept',
              position: 'right',
              label: 'Developers',
            },
            {to: '/news', label: 'News', position: 'right'},
            {to: '/nest-research-academy', label: 'NEST Research Academy', position: 'right'},
            {
              type: 'html',
              position: 'right',
              value: `<a href="https://finance.nestprotocol.org/" target="_blank" class="nav-app-item">App</a>`,
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true
        },
        metadata: [
          {name: "twitter:card", content: "summary_large_image"},
          {name: "twitter:site", content: "@nest_protocol"},
          {name: "twitter:title", content: "NEST Protocol"},
          {
            name: "twitter:description",
            content: "NEST is a blockchain-based probability virtual machine (PVM) system with web3 applications of DeFi, GameFi, NFT built on it."
          },
          {name: "og:url", content: "https://nestprotocol.org/"},
          {name: "og:title", content: "NEST Protocol"},
          {name: "og:type", content: "website"},
          {name: "og:site_name", content: "NEST Protocol"},
          {name: "og:image", content: "https://www.nestprotocol.org/img/logo.svg"},
        ],
      }),
};

module.exports = config;
