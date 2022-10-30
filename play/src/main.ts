import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import JlcAdmin from '@sz-jlc/admin-vue3'
import '@sz-jlc/admin-vue3/dist/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(JlcAdmin)

app.mount('#app')
