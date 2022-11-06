<template>
  <div style="margin-bottom: 10px;">
    <el-button @click="loading = !loading">切换loading</el-button>
    <el-button @click="error = !error">切换error</el-button>
  </div>
  <jlc-table :columns="columns"  :data="tableData" :loading="loading" :error="error"></jlc-table>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { JlcTable } from '@sz-jlc/admin-vue3'
import { ElButton } from 'element-plus'

const loading = ref(false)
const error = ref(false)

const columns = [
  { label: '姓名', prop: 'name', },
  { label: '性别', prop: 'gender', },
  { label: '年龄', prop: 'age', },
  { label: '岗位', prop: 'job', }
]

const tableData = []
</script>
