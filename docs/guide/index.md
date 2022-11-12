<script setup>
import ConfigProvider from './example/config-provider.vue'
</script>

# 指南
嘉立创管理端组件库使用指南

## 安装
```
npm install @sz-jlc/admin-vue3
```

::: tip
当前组件库基于element-plus进行二次封装，所以安装之前确保安装了vue3以及element-plus
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

## Volar 支持
同element-plus一样，如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.types 指定全局组件类型。
``` json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["@sz-jlc/admin-vue3/global"]
  }
}
```

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

同时还需要存在全局变量：Vue、ElementPlus
:::

## 全局配置
目前仅提供了一个转换分页数据的全局配置(transformPageData)，后续会支持更多组件的默认配置注入。

> 如下示例，有时提供的数据结构和组件需要的数据结构并不一样，则可以通过注入全局配置。

<config-provider />

``` vue{2,15-25,79-80}
<template>
  <jlc-config-provider :transform-page-data="transformPageData">
    <jlc-pro-table 
      :filters="filters" 
      :columns="columns" 
      :get-data="getData" 
      :filter-props="{ columnCount: 3 }"
    />
  </jlc-config-provider>
</template>

<script setup lang='ts'>
import { JlcProTable, JlcConfigProvider } from '@sz-jlc/admin-vue3'

// 将接口返回的数据转换为组件需要的数据结构
// 因为这里是提供了一个方法，所以可以有很多灵活的用法：
// 比如对接口响应数据进行容错处理（如data为null的情况）
// 比如之前遇到接口返回的totalRows是一个字符串，传递给el-page组件后导致异常，也可以通过这里进行处理
const transformPageData = (data: any) => {
  const { listData, totalRows } = data
  return {
    list: listData,
    total: totalRows,
  }
}

const mockData = [
  {
    name: '小明',
    gender: 1,
    age: 25,
    job: '前端工程师',
    introduction: '高级前端工程师，擅长原生JS，熟悉设计模式。'
  },
  {
    name: '小红',
    gender: 0,
    age: 28,
    job: '测试工程师',
    introduction: '高级测试工程师，6年工作经验，熟悉自动化测试。'
  },
  {
    name: '小军',
    gender: 1,
    age: 32,
    job: 'Java工程师',
    introduction: '资深架构师，解决过无数疑难杂症，擅长系统设计。'
  },
]

const filters = [
  { label: '姓名', key: 'name' },
]

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age' },
  { label: '岗位', prop: 'job' },
  { label: '个人介绍', prop: 'introduction', align: 'left' },
]

const getData = (queryParams: any): Promise<any> => {
  const { name, gender, pageSize, pageNum } = queryParams
  return new Promise(resolve => {
    setTimeout(() => {
      // 模拟筛选
      const list = mockData
        .filter(item => {
          if (!name) return true
          return item.name.includes(name)
        })
        .filter(item => {
          if (gender === null || gender === undefined) return true
          return item.gender === gender
        })
      const lastPage = pageNum * pageSize
      resolve({
        // 模拟分页
        listData: list.slice(lastPage - pageSize, lastPage),
        totalRows: list.length,
      })
    }, Math.random() * 200)
  })
}
</script>
```
