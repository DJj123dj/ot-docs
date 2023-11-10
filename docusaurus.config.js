// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Ticket Docs',
  tagline: 'A guide for the most advanced open source discord ticket bot!',
  favicon: 'img/logo_vertical.png',

  url: 'https://docs.openticket.dj-dj.be',
  baseUrl: '/',

  organizationName: 'djdj-development',
  projectName: 'ot-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:'https://github.com/DJj123dj/ot-docs',
          includeCurrentVersion:true,
          lastVersion: 'current',
          versions:{
            "current":{
                label:"🚧 Dev Version",
                path:"current",
                badge:true,
                banner:"unreleased"
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:'https://github.com/DJj123dj/ot-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode:{
        defaultMode:"dark",
        disableSwitch:true,
        respectPrefersColorScheme:false
      },
      image: 'img/logo_banner.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Open Ticket Logo',
          src: 'img/logo_main.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pluginSidebar',
            position: 'left',
            label: 'Plugins',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: 'https://discord.dj-dj.be',
                label: 'Help us translate',
              },
            ],
          },
          {
            href: 'https://discord.dj-dj.be',
            position: 'right',
            className:"header-discord-link"
          },
          {
            href: 'https://github.com/DJj123dj/open-ticket',
            position: 'right',
            className:"header-github-link"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/current/docs/get-started',
              },
            ],
          },
          {
            title: 'API Reference',
            items: [
              {
                label: 'Get Started',
                to: '/docs/current/api/get-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.dj-dj.be',
              },
              {
                label: 'Website',
                href: 'https://www.dj-dj.be',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/djdjdevelopment',
              },
              {
                label:"Youtube",
                href:"https://www.youtube.com/@djdjdevelopment"
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Plugins',
                to: '/docs/current/plugin/get-started',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DJj123dj/open-ticket',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://www.dj-dj.be">DJdj Development</a>. Made by <a target="_blank" href="https://www.github.com/DJj123dj">DJj123dj</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
