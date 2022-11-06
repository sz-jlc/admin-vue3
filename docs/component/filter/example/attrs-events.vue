<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '姓名',
    key: 'name',
    attrs: {
      placeholder: '输入关键词模糊查找'
    },
    events: {
      focus() {
        console.log('focus')
      }
    }
  },
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
