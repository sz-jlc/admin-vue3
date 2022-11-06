<template>
  <div style="margin-bottom: 10px;">
    <el-button @click="onQuery()">查询</el-button>
  </div>
  <jlc-pro-table 
    ref="proTableRef"
    :filters="[]" 
    :columns="columns" 
    :get-data="getData"
    :init-get="false"
    :filter-props="{ 
      columnCount: 3,
      defaultPageSize: 2,
      pageSizes: [2, 5, 10]
    }"
  ></jlc-pro-table>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { JlcProTable } from '@sz-jlc/admin-vue3'

const mockData = [
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

const proTableRef = ref()

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age' },
  { label: '岗位', prop: 'job' },
  { label: '个人介绍', prop: 'introduction', align: 'left' },
]

const getData = (): any => {
  return {
    list: mockData,
    total: mockData.length
  }
}

const onQuery = () => {
  proTableRef.value.query()
}
</script>
