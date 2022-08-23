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
    logo: '/img/logo.png',
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
      { icon: 'discord', link: 'https://twitter.com/interlockweb3' }
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
          { text: 'FAQ', link: '/faq' },
        ]
      },
      {
        collapsible: true,
        collapsed: false,
        text: "ILOCK Token",
        items: [
          { text: 'Launch & Supply', link: '/token/supply' },
          { text: 'Litepaper', link: '/token/litepaper' },
          { text: 'Whitepaper', link: '/token/whitepaper' },
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
        ]
      },
      {
        collapsible: true,
        collapsed: true,
        text: "How We Work",
        items: [
          { text: 'Introduction', link: '/handbook/' },
          { text: 'Our DNA', link: '/handbook/dna' },
          { text: 'Founder', link: '/handbook/founders' },
          // TODO these sections are WIP
          // { text: 'Community', link: '/handbook/community' },
          // { text: 'Customer', link: '/handbook/customers' },
          // { text: 'Digital Experience', link: '/' },
          // { text: 'Engineering', link: '/handbook/engineering' },
          // { text: 'Growth', link: '/handbook/founders' },
          // { text: 'People', link: '/handbook/people' },
          // { text: 'Product', link: '/handbook/growth' },
          // { text: 'Sales', link: '/handbook/sales' },
          // { text: 'Security', link: '/handbook/security' },
        ]
      },
      {
        collapsible: true,
        collapsed: true,
        text: "Get Involved",
        items: [
          { text: 'Contribute', link: 'https://github.com/interlock-network' },
          { text: 'Careers', link: 'https://interlock.breezy.hr/' },
          { text: 'Discord', link: 'https://twitter.com/interlockweb3' }
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
