import { defineConfig } from 'vitepress'
export default defineConfig({
  themeConfig: {
    siteTitle: false,
    logo: '/assets/svg/jlc-logo.svg',
    nav: [
      { text: '指南', link: '/guide/index' },
      { text: '组件', link: '/component/index' },
      { text: '贡献', link: '/contribution/index' },
      { text: 'Github', link: 'https://github.com/sz-jlc/admin-vue3' }
    ],
    sidebar: {
      '/component/': [
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
      '/contribution/': [
        {
          text: '贡献指南',
          items: [
            { text: '新增组件', link: '/' },
            { text: '修复组件', link: '/' },
          ]
        },
        {
          text: '待办项',
          items: [
            { text: '问题', link: '/contribution/todo/issue' },
            { text: '优化', link: '/contribution/todo/optimize' },
            { text: '构建', link: '/contribution/todo/build' },
          ]
        }
      ],
    },
    footer: {
      message: '深圳嘉立创前端团队',
    },
    
  },
  title: '嘉立创管理端组件库',
  description: '嘉立创管理端组件，Vue3、ElementPlus'
})
