// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("./openticket.theme");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Open Ticket Docs',
    tagline: 'This is the documentation for Open Ticket, the most advanced & customisable open-source ticket bot in existence!',
    favicon: 'img/logo_vertical.png',

    url: 'https://otdocs.dj-dj.be',
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
            editUrl:'https://github.com/DJj123dj/ot-docs/blob/main',
            includeCurrentVersion:true,
            lastVersion: '3.5.x',
            versions:{
                "3.5.x":{
                    label:"v3.5.x",
                    path:"current",
                    badge:false,
                    banner:"none"
                },
                "current":{
                    label:"🚧 Dev Version",
                    path:"dev",
                    badge:false,
                    banner:"unreleased"
                }
            },
            },
            blog: {
                showReadingTime: true,
                editUrl:'https://github.com/DJj123dj/ot-docs/blob/main',
                blogTitle:"News & Updates",
                blogDescription:"Here, you will find news & updates from Open Ticket!",
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
        colorMode:{
            defaultMode:"dark",
            disableSwitch:true,
            respectPrefersColorScheme:false
        },
        image: 'img/logo_banner.png',
        navbar:{
            title: '',
            logo: {
                alt: 'Open Ticket Logo',
                src: 'img/logo_main.png',
            },
            items:[
                {
                    type: 'docSidebar',
                    sidebarId: 'documentationSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'developerSidebar',
                    position: 'left',
                    label: 'Developer',
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
                        {
                            label: 'Ticket Flow',
                            to: '/docs/current/docs/system/ticket-flow',
                        },
                        {
                            label: 'Transcripts',
                            to: '/docs/current/docs/system/transcripts',
                        },
                        {
                            label: 'Translation',
                            to: '/docs/current/docs/translation',
                        },
                        {
                            label: 'Configuration',
                            to: '/docs/current/docs/config',
                        }
                    ],
                },
                {
                    title: 'Developer',
                    items: [
                        {
                            label: 'Get Started',
                            to: '/docs/current/developer/get-started',
                        },
                        {
                            label: 'Plugins',
                            to: '/docs/current/docs/system/plugins',
                        },
                        {
                            label: 'API Reference',
                            to: '/docs/current/api/get-started',
                        },
                        {
                            label: 'Plugin List',
                            to: '/docs/current/plugin/list',
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
                            label: 'Community Plugins',
                            to: '/docs/current/plugin/list',
                        },
                        {
                            label: 'Contributing',
                            href: '/contributing',
                        },
                        {
                            label: 'Open Ticket 4.0',
                            href: '/docs/current/docs/openticket-4',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://www.dj-dj.be">DJdj Development</a>. Made by <a target="_blank" href="https://www.github.com/DJj123dj">DJj123dj</a>.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages:["json","diff"]
        },
        docs:{
            sidebar:{
                autoCollapseCategories:true
            }
        }
        }),
    scripts:[
        "/js/openticket.js",
        "https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
    ]
};

module.exports = config;
