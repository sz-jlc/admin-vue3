<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '生日',
    key: 'birthday',
    component: 'el-date-picker',
    transform(date?: Date) {
      if (date instanceof Date) {
        return date.toLocaleDateString()
      }
      return date
    }
  }
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
