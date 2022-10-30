## 安装
```
npm install @sz-jlc/admin-vue3
```

::: tip
当前组件库基于element-plus进行二次封装，所以安装之前确保安装了vue3以及element-plus依赖
:::

## 全局注册
``` js
import { createApp } from 'vue'
import JlcAdmin from '@sz-jlc/admin-vue3'
import '@sz-jlc/admin-vue3/dist/style.css'

const app = createApp()
app.use(JlcAdmin)
app.mount('#app')
```
::: tip
目前暂未提供组件全局声明文件供引入，所以全局注册方式无法获得ts类型提示，后续会提供
:::


## 局部导入
``` vue
<script setup>
import { JlcProTable } from '@sz-jlc/admin-vue3'
</script>
```

::: warning
局部导入依然需要导入样式：
import '@sz-jlc/admin-vue3/dist/style.css'
:::


## 标签引入
``` html
<script src="jlc-admin-vue3/dist/index.js"></script>
<link href="jlc-admin-vue3/dist/style.css"></link>
```
::: warning
当前组件库暂无CDN链接，请自行下载npm包进行标签引入
:::
