<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const genderOptions = [
  { label: '男', value: 1 },
  { label: '女', value: 0 },
]

const filters = [
  {
    label: '姓名',
    key: 'name',
  },
  {
    label: '性别',
    key: 'gender',
    component: 'el-select',
    children: genderOptions.map(item => ({
      component: 'el-option',
      attrs: item,
    }))
  },
  {
    label: '年龄',
    key: 'age',
    component: 'el-input-number'
  },
  {
    label: '生日',
    key: 'birthday',
    component: 'el-date-picker',
    attrs: {
      placeholder: '请选择'
    }
  }
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
