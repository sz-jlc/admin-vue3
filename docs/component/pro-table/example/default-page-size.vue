<template>
  <jlc-pro-table 
    ref="proTableRef"
    :filters="[{ key: 'a' }]" 
    :columns="columns" 
    :get-data="getData"
    :filter-props="{ columnCount: 3 }"
    :page-props="{ defaultPageSize: 2, pageSizes: [2, 5, 10] }"
  ></jlc-pro-table>
</template>

<script setup lang='ts'>
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

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age' },
  { label: '岗位', prop: 'job' },
  { label: '个人介绍', prop: 'introduction', align: 'left' },
]

const getData = (queryParams: any): any => {
  console.log(queryParams)
  const { pageNum, pageSize } = queryParams
  const lastPage = pageNum * pageSize
  return {
    list: mockData.slice(lastPage - pageSize, lastPage),
    total: mockData.length
  }
}
</script>
