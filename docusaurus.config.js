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
                editUrl:'https://github.com/open-discord-bots/ot-docs/blob/main',
                includeCurrentVersion:true,
                admonitions: {
                    keywords: [
                        'info',
                        'success',
                        'danger',
                        'note',
                        'tip',
                        'warning',
                        'important',
                        'caution',
                        'security',
                        'experimental',
                        'deprecated',
                        'discord',
                        'security',
                        'availability'
                    ],
                },
            },
            blog: {
                showReadingTime: true,
                editUrl:'https://github.com/open-discord-bots/ot-docs/blob/main',
                blogTitle:"Blog",
                blogDescription:"Here, you will find news & updates from Open Ticket!",
                blogSidebarTitle:"All posts",
                blogSidebarCount:"ALL",
                admonitions: {
                    keywords: [
                        'info',
                        'success',
                        'danger',
                        'note',
                        'tip',
                        'warning',
                        'important',
                        'caution',
                        'security',
                        'experimental',
                        'deprecated',
                        'discord',
                        'security',
                        'availability'
                    ],
                },
            },
            theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
            pages:{
                admonitions: {
                    keywords: [
                        'info',
                        'success',
                        'danger',
                        'note',
                        'tip',
                        'warning',
                        'important',
                        'caution',
                        'security',
                        'experimental',
                        'deprecated',
                        'discord',
                        'security',
                        'availability'
                    ],
                },
            }
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
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/guides/get-started',
                        },
                        {
                            label: 'Downloading',
                            to: '/docs/guides/installation/download',
                        },
                        {
                            label: 'Configuration',
                            to: '/docs/guides/installation/configuration',
                        },
                        {
                            label: 'Hosting 24/7',
                            to: '/docs/guides/hosting/category',
                        },
                        {
                            label: 'Features',
                            to: '/docs/guides/features/category',
                        },
                        {
                            label: 'Plugins',
                            to: '/docs/guides/plugins',
                        }
                    ],
                },
                {
                    title: 'Developer',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/framework/get-started',
                        },
                        {
                            label: 'Plugin Examples',
                            to: 'https://odplugins.dj-dj.be/tree/main/open-ticket',
                        },
                        {
                            label: 'API Reference',
                            to: '/docs/reference/get-started',
                        },
                        {
                            label: 'Your First Plugin',
                            to: '/docs/framework/basic-plugins/first-plugin',
                        },
                        {
                            label: 'Your First Config',
                            to: '/docs/framework/basic-plugins/simple-config',
                        },
                        {
                            label: 'Your First Command',
                            to: '/docs/framework/basic-plugins/simple-command',
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
                            label: 'X (Twitter)',
                            href: 'https://x.com/djdjdevelopment',
                        },
                        {
                            label:"Youtube",
                            href:"https://www.youtube.com/@djdjdevelopment"
                        },
                        {
                            label:"Daily.dev",
                            href:"https://dly.to/gCKkr7Bkoor"
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
                        {
                            label: 'Support Us',
                            href: 'https://github.com/sponsors/DJj123dj',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://www.dj-dj.be">DJdj Development</a>. Made by <a target="_blank" href="https://www.github.com/DJj123dj">DJj123dj</a>.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages:["json","diff","toml","javascript","typescript"]
        },
        docs:{
            sidebar:{
                autoCollapseCategories:true
            }
        }
        }),
    scripts:[
        "/js/openticket.js",
        "/js/twemoji.min.js"
        //"https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
    ]
};

module.exports = config;
