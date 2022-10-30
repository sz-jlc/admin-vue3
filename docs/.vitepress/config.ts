import { defineConfig } from 'vitepress'
export default defineConfig({
  themeConfig: {
    siteTitle: false,
    logo: '/assets/svg/jlc-logo.svg',
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/components' },
      { text: 'Github', link: 'https://github.com/...' }
    ],
    sidebar: [
      {
        text: '组件列表',
        items: [
          { text: 'Filter', link: '/introduction' },
          { text: 'Table', link: '/getting-started' },
          { text: 'Page', link: '/getting-started' },
          { text: 'ProTable', link: '/getting-started' },
          { text: 'ProList', link: '/getting-started' },
          { text: 'TreeTransfer', link: '/getting-started' },
          { text: 'AoeDialog', link: '/getting-started' },
          { text: 'AoeDrawer', link: '/getting-started' },
        ]
      }
    ],
    footer: {
      message: '赶快参与贡献吧~',
    },
    
  },
  title: '嘉立创管理端组件库',
  description: '嘉立创管理端组件，Vue3、ElementPlus'
})
