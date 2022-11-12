<template>
  <jlc-config-provider :transform-page-data="transformPageData">
    <jlc-pro-table 
      :filters="filters" 
      :columns="columns" 
      :get-data="getData" 
      :filter-props="{ columnCount: 3 }"
    />
  </jlc-config-provider>
</template>

<script setup lang='ts'>
import { JlcProTable, JlcConfigProvider } from '@sz-jlc/admin-vue3'

// 将接口返回的数据转换为组件需要的数据结构
// 因为这里是提供了一个方法，所以可以有很多灵活的用法：
// 比如对接口响应数据进行容错处理（如data为null的情况）；
// 比如之前遇到接口返回的totalRows是一个字符串，传递给el-page组件后导致异常，也可以通过这里进行处理
const transformPageData = (data: any) => {
  const { listData, totalRows } = data
  return {
    list: listData,
    total: totalRows,
  }
}

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

const filters = [
  { label: '姓名', key: 'name' },
]

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age' },
  { label: '岗位', prop: 'job' },
  { label: '个人介绍', prop: 'introduction', align: 'left' },
]

const getData = (queryParams: any): Promise<any> => {
  const { name, gender, pageSize, pageNum } = queryParams
  return new Promise(resolve => {
    setTimeout(() => {
      // 模拟筛选
      const list = mockData
        .filter(item => {
          if (!name) return true
          return item.name.includes(name)
        })
        .filter(item => {
          if (gender === null || gender === undefined) return true
          return item.gender === gender
        })
      const lastPage = pageNum * pageSize
      resolve({
        // 模拟分页
        listData: list.slice(lastPage - pageSize, lastPage),
        totalRows: list.length,
      })
    }, Math.random() * 200)
  })
}
</script>
