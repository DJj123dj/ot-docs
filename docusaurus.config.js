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
                includeCurrentVersion:true
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
                    sidebarId: 'guideSidebar',
                    position: 'left',
                    label: 'Guides',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'frameworkSidebar',
                    position: 'left',
                    label: 'Framework',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'referenceSidebar',
                    position: 'left',
                    label: 'Reference',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://odplugins.dj-dj.be/tree/main/open-ticket',
                    position: 'right',
                    label:"🧩 Plugins"
                },
                {
                    href: 'https://github.com/sponsors/DJj123dj',
                    position: 'right',
                    label:"❤️ Sponsor Us"
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
                    title: 'Docs (TODO)',
                    items: [
                        {
                            label: 'Get Started (TODO)',
                            to: '/docs/current/docs/get-started',
                        },
                        {
                            label: 'Ticket Flow (TODO)',
                            to: '/docs/current/docs/system/ticket-flow',
                        },
                        {
                            label: 'Transcripts (TODO)',
                            to: '/docs/current/docs/system/transcripts',
                        },
                        {
                            label: 'Translation (TODO)',
                            to: '/docs/current/docs/translation',
                        },
                        {
                            label: 'Configuration (TODO)',
                            to: '/docs/current/docs/config',
                        }
                    ],
                },
                {
                    title: 'Developer (TODO)',
                    items: [
                        {
                            label: 'Get Started (TODO)',
                            to: '/docs/current/developer/get-started',
                        },
                        {
                            label: 'Plugins (TODO)',
                            to: '/docs/current/docs/system/plugins',
                        },
                        {
                            label: 'API Reference (TODO)',
                            to: '/docs/current/api/get-started',
                        },
                        {
                            label: 'Plugin List (TODO)',
                            to: '/docs/current/plugin/list',
                        },
                    ],
                },
                {
                    title: 'Community (TODO)',
                    items: [
                        {
                            label: 'Discord (TODO)',
                            href: 'https://discord.dj-dj.be',
                        },
                        {
                            label: 'Website (TODO)',
                            href: 'https://www.dj-dj.be',
                        },
                        {
                            label: 'Twitter (TODO)',
                            href: 'https://twitter.com/djdjdevelopment',
                        },
                        {
                            label:"Youtube (TODO)",
                            href:"https://www.youtube.com/@djdjdevelopment"
                        }
                    ],
                },
                {
                    title: 'More (TODO)',
                    items: [
                        {
                            label: 'Blog (TODO)',
                            to: '/blog',
                        },
                        {
                            label: 'Community Plugins (TODO)',
                            to: '/docs/current/plugin/list',
                        },
                        {
                            label: 'Contributing (TODO)',
                            href: '/contributing',
                        },
                        {
                            label: 'Open Ticket 4.0 (TODO)',
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
            additionalLanguages:["json","diff","toml"]
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
