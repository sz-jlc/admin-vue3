<template>
  <el-button @click="reset()">reset</el-button>
  <jlc-page ref="pageRef" :total="88" @query="onQuery" :page-sizes="pageSizes"></jlc-page>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { JlcPage } from '@sz-jlc/admin-vue3'

const pageRef = ref()

const pageSizes = [10, 20, 30, 50, 100]

const onQuery = (pageInfo: any) => {
  console.log(pageInfo)
}

const reset = () => {
  pageRef.value.reset()
}
</script>
