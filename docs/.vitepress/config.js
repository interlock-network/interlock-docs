import MermaidPlugin from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

export default {
  title: 'Interlock',
  description: 'Interlock Network Documentation',
  // base: '/interlock-docs/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: '<img src="blob:chrome-untrusted://media-app/9ac8a768-cb66-4be8-acea-05ef013c4a4e" alt="Logo Horizon big (1).png"/>',
    siteTitle: false,
    footer: {
      copyright: 'Copyright © 2022 Interlock'
    },
    editLink: {
      pattern: 'https://github.com/interlock-network/interlock-docs/edit/master/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/interlock-network' },
      { icon: 'twitter', link: 'https://twitter.com/interlockweb3' },
      { icon: 'discord', link: 'https://bit.ly/intldiscord' }
    ],
    nav: [
      { text: 'Home', link: 'https://www.interlock.network' },
      { text: 'Blog', link: 'https://www.interlock.network/blogs' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: 'https://github.com/interlock-network/interlock-docs/commits/master' },
        ]
      }
    ],
    sidebar: [
      {
        collapsible: true,
        collapsed: false,
        text: "Introduction",
        items: [
          { text: 'What is Interlock?', link: '/' },
          { text: 'Whitepaper', link: '/token/whitepaper' },
          { text: 'FAQ', link: '/faq' },
        ]
      },
      {
        collapsible: true,
        collapsed: false,
        text: "$ILOCK Token",
        items: [
          { text: 'Tokenomics', link: '/token/supply' },
          { text: 'Models', link: 'https://github.com/interlock-network/interlock-models#interlock-models' },
        ]
      },
      {
        collapsible: true,
        collapsed: false,
        text: "Ecosystem",
        items: [
          // TODO Needs completion of airlock docs first
          // { text: 'Airlock', link: 'https://docs.airlock.security' },
          { text: 'Bouncer', link: '/ecosystem/bouncer' },
          { text: 'ThreatSlayer', link: '/ecosystem/threatslayer' },
        ]
      },
    ],
  },
  markdown: {
     config: (md) => {
      // use more markdown-it plugins!
      md.use(MermaidPlugin);
      md.use(mathjax3);
    }
  },
  // vue: {
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: (tag) => customElements.includes(tag),
  //     },
  //   },
  // }
}
