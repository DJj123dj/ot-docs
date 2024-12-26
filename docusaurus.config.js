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
                blogTitle:"Blog",
                blogDescription:"Here, you will find news & updates from Open Ticket!",
                blogSidebarTitle:"All posts",
                blogSidebarCount:"ALL",
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
                    title: 'Developer',
                    items: [
                        {
                            label: 'Get Started',
                            to: '/docs/framework/get-started',
                        },
                        {
                            label: 'Plugin Examples',
                            to: 'https://odplugins.dj-dj.be/tree/main/open-ticket',
                        },
                        {
                            label: 'API Reference',
                            to: '/docs/reference/get-started',
                        }
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
                            label: 'Open Ticket Plugins',
                            to: 'https://odplugins.dj-dj.be/tree/main/open-ticket',
                        },
                        {
                            label: 'Contributing',
                            href: '/contributing',
                        },
                        {
                            label: 'Translation',
                            href: 'https://otgithub.dj-dj.be/tree/dev/.github/CONTRIBUTING.md',
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
