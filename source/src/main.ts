import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import JlcAdmin from './index'

const app = createApp(App)
app.use(ElementPlus)
app.use(JlcAdmin)
app.mount('#app')
