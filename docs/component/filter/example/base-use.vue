<template>
  <!-- 为了更好的演示效果，此处配置了column-count="3" -->
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '姓名',
    key: 'name',
    component: 'el-input' // 默认即为el-input，这行也可以不写
  },
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
