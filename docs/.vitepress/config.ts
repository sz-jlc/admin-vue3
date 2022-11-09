import { defineConfig } from 'vitepress'
export default defineConfig({
  themeConfig: {
    siteTitle: false,
    logo: '/assets/svg/jlc-logo.svg',
    nav: [
      { text: '指南', link: '/guide/index' },
      { text: '组件', link: '/component/filter/index.html' },
      { text: '贡献', link: '/contribution/todo/issue' },
      { text: 'Github', link: 'https://github.com/sz-jlc/admin-vue3' }
    ],
    sidebar: {
      '/component/': [
        {
          text: '组件列表',
          items: [
            { text: 'Filter', link: '/component/filter/index.html' },
            { text: 'Table', link: '/component/table/index.html' },
            { text: 'Page', link: '/component/page/index.html' },
            { text: 'ProTable', link: '/component/pro-table/index.html' },
            // { text: 'ProList', link: '/component/pro-list/index.html' },
            // { text: 'TreeTransfer', link: '/component/tree-transfer/index.html' },
            // { text: 'AoeDialog', link: '/component/aoe-dialog/index.html' },
            // { text: 'AoeDrawer', link: '/component/aoe-drawer/index.html' },
          ]
        }
      ],
      '/contribution/': [
        // {
        //   text: '贡献指南',
        //   items: [
        //     { text: '新增组件', link: '/' },
        //     { text: '修复组件', link: '/' },
        //   ]
        // },
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
    outlineTitle: '目录',
    outline: 'deep',
  },
  title: '嘉立创管理端组件库',
  description: '嘉立创管理端组件，Vue3、ElementPlus',
  lang: 'zh_CN',
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  base: process.env.NODE_ENV === 'production' ?  '/admin-vue3/' : ''
})
