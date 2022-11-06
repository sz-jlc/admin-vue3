<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery">
    <template #department="{ bindForm }">
      <el-input v-model="bindForm.department" readonly placeholder="请选择">
        <template #append>
          <el-button @click="onChooseDepartment()">选择</el-button>
        </template>
      </el-input>
    </template>
  </jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '部门',
    key: 'department',
    slot: 'department'
  },
]

const onChooseDepartment = () => {
  console.log('选择部门')
}

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
