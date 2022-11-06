<template>
  <div style="margin-bottom: 10px;">
    <el-button @click="clearSelection()">clearSelection</el-button>
  </div>
  <jlc-table 
    ref="tableRef" 
    :columns="columns" 
    :data="tableData" 
    @selection-change="onSelectionChange"
  >
    <template #empty>null</template>
    <template #erorr>erorr</template>
  </jlc-table>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { JlcTable } from '@sz-jlc/admin-vue3'

// cloumn配置基本和el-table-column一致
const columns = [
  { type: 'selection' },
  { type: 'index', label: '序号', width: 70, },
  { label: '姓名', prop: 'name', },
  {
    label: '性别',
    formatter(row: any) {
      const genderMap = {
        0: '女',
        1: '男'
      }
      return genderMap[row.gender] || '未知'
    }
  },
  { label: '年龄', prop: 'age', sortable: true, },
  { label: '岗位', prop: 'job', },
  { label: '个人介绍', prop: 'introduction', align: 'left' }
]

const tableData = [
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

const tableRef = ref()

const onSelectionChange = (selection: any[]) => {
  console.log(selection)
}

const clearSelection = () => {
  tableRef.value.clearSelection()

  tableRef.value.setScrollTop(100)
}
</script>
