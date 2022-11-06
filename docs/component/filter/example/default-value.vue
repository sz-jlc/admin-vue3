<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '姓名',
    key: 'name',
    value: '嘉立创'
  },
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
