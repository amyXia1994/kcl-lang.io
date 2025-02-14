// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KCL programming language.',
  tagline: 'Abstraction  Validation  Production-Ready',

  url: 'https://kcl-lang.github.io',
  organizationName: 'KusionStack', // Usually your GitHub org/user name.
  projectName: 'KCLVM', // Usually your repo name.

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kcl-logo.jpg',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },
  scripts: [],

  customFields: {
    tagDescription: 'KCL is an open-source constraint-based record & functional language mainly used in configuration and policy scenarios.',
    hero: {
      description: "KCL is an open-source constraint-based record & functional language mainly used in configuration and policy scenarios.",
      buttons: {
        first: {
          url: "docs/user_docs/intro/kcl-intro",
          text: "Learn More",
        },
        second: {
          url: "docs/user_docs/getting-started/",
          text: "Get Started",
        },
      },
    },
    sections: {
      features: {
        title: "Why KCL?",
        featureList: [
          {
            title: 'Easy-to-Use',
            imageUrl: 'img/microsite/reasons/extensible.svg',
            description: `
                Originated from high-level languages ​​such as Python and Golang, incorporating functional
                language features with low side effects.
            `,
          },
          {
            title: 'Quick Modeling',
            imageUrl: 'img/microsite/reasons/single-entrypoint.svg',
            description: `
                Schema-centric configuration types and modular abstraction.
                Configuration with type, logic and policy based on Config, Schema, Lambda, Rule.
            `,
          },
          {
            title: 'Stability',
            imageUrl: 'img/microsite/reasons/extensible.svg',
            description: `
                Configuration stability built on static type system, constraints, and rules.
            `,
          },
          {
            title: 'Scalability',
            imageUrl: 'img/microsite/reasons/single-entrypoint.svg',
            description: `
                High scalability through automatic merge mechanism of isolated config blocks.
            `,
          },
          {
            title: 'Fast Automation',
            imageUrl: 'img/microsite/reasons/user-experience.svg',
            description: `
                High compile time and runtime performance.
                Gradient automation scheme of CRUD APIs, multilingual SDKs, language plugin.
            `,
          },
          {
            title: 'API Affinity',
            imageUrl: 'img/microsite/reasons/file.svg',
            description: `
                Native support API ecological specifications such as OpenAPI, Kubernetes CRD, Kubernetes YAML spec.
            `,
          },
        ],
      },
      consolidation: {
        snippets: [
          `
            Stop putting your team through an endless stream of high-friction tools and user interfaces.
            Clutch allows you to combine many tools into one, in the form that your developers use most.
          `,
          `
            We grow with you. Clutches extensible platform means you can integrate as many tools as
            you need, even if they are specific to you.
          `,
        ]
      }
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // default version: Next
          // lastVersion: 'current',

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/KusionStack/kcl-lang.io/blob/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          postsPerPage: 2,
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/KusionStack/kcl-lang.io/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // hideableSidebar: true,
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `⭐️ If you like KCL, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/KusionStack/KCLVM">Github</a>`,
      },
      
      algolia: {
        appId: 'I3BKOKGSD5',
        apiKey: '20af56a3665effe7fa744b4b6cf78d60',
        indexName: 'kcl-lang',
        contextualSearch: true,
      },
      navbar: {
        title: 'KCL',
        logo: {
          alt: 'KCL Logo',
          src: 'img/kcl-logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            docId: 'intro/kcl-intro',
            position: 'left',
            sidebarId: 'user_docs',
            label: 'UserDoc',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'reference',
            label: 'Reference',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tools',
            label: 'Tools',
          },
          {
            // href: 'http://play.kcl-lang.io/', // Fixme: change the playground website listening port.
            href: 'http://39.106.40.108:2022/-/play/index.html',
            // type: 'docSidebar',
            position: 'left',
            sidebarId: 'playground',
            label: 'Playground',
          },
          {
            href: 'https://github.com/KusionStack/examples',
            position: 'left',
            sidebarId: 'examples',
            label: 'Examples',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'community',
            label: 'Community',
          },

          {to: '/blog', label: 'Blog', position: 'left'},

          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'events',
            label: 'Events',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                href: 'https://github.com/KusionStack/kcl-lang.io/issues/',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            href: 'https://github.com/KusionStack/KCLVM',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ].filter(item => true),
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Document',
            items: [
              {
                label: 'Introduction',
                to: '/docs/user_docs/getting-started/intro',
              },
            ],
          },
          {
            title: 'Resource',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Github',
                href: 'https://github.com/KusionStack/KCLVM',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/KusionStack/shared_invite/zt-19lqcc3a9-_kTNwagaT5qwBE~my5Lnxg',
              },
            ],
          },
        ],
        logo: {
          alt: 'AntGroup Open Source Logo',
          src: 'img/oss_logo.svg',
          width: 160,
          height: 51,
          href: 'https://opensource.antgroup.com/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} KCL Authors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      }
    }),
};

module.exports = config;
