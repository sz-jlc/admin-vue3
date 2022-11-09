<template>
  <jlc-table :columns="columns" :data="tableData">
    <template #gender="{ row }">
      <el-tag :type="genderTagTypeMap[row.gender] ?? 'info'">
        {{ genderMap[row.gender] || '未知' }}
      </el-tag>
    </template>
  </jlc-table>
</template>

<script setup lang='ts'>
import { ElTag } from 'element-plus'
import { JlcTable } from '@sz-jlc/admin-vue3'

const genderMap = { 0: '女', 1: '男' }
const genderTagTypeMap = { 0: 'danger', 1: '' }

const columns = [
  { label: '姓名', prop: 'name', },
  { label: '性别', slot: 'gender' },
  { label: '年龄', prop: 'age', },
  { label: '岗位', prop: 'job', }
]

const tableData = [
  {
    name: '小明',
    gender: 1,
    age: 18,
    job: '前端工程师'
  },
  {
    name: '小红',
    gender: 0,
    age: 19,
    job: '测试工程师'
  },
  {
    name: '小军',
    gender: 1,
    age: 20,
    job: 'Java工程师'
  },
]
</script>
