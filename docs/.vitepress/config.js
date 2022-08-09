import MermaidPlugin from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

export default {
  title: 'Interlock',
  description: 'Interlock tokenomics documentation',
  base: '/interlock-whitepaper/',
  themeConfig: {
    logo: '/img/logo.png',
    siteTitle: false,
    footer: {
      copyright: 'Copyright © 2022 Interlock'
    },
    editLink: {
      pattern: 'https://github.com/interlock-network/interlock-whitepaper/edit/main/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/interlock-network' },
      { icon: 'twitter', link: 'https://twitter.com/interlockweb3' },
      { icon: 'discord', link: 'https://twitter.com/interlockweb3' }
    ],
    nav: [
      { text: 'Home', link: 'https://www.interlock.network' },
      { text: 'Blog', link: 'https://www.interlock.network/blogs' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: 'https://github.com/interlock-network/interlock-whitepaper/commits/master' },
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
          { text: 'FAQ', link: '/faq' },
        ]
      },
      {
        collapsible: true,
        collapsed: false,
        text: "Token Overview",
        items: [
          { text: 'Litepaper', link: '/litepaper' },
          { text: 'Whitepaper', link: '/whitepaper' },
          { text: 'Tokenomics', link: '/tokenomics' },
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