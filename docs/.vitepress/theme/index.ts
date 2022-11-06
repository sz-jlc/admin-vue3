import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import JlcAdmin from '@sz-jlc/admin-vue3'
import 'element-plus/theme-chalk/index.css'
import '@sz-jlc/admin-vue3/dist/style.css'
import './styles/var.css'
import './styles/base.css'
import './styles/override.css'
import './styles/common.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.use(JlcAdmin)
  }
}
