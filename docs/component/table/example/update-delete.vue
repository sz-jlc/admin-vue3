<template>
  <jlc-table 
    :columns="columns" 
    :data="tableData" 
    update 
    delete
    @update="onUpdate()"
    @delete="onDelete()"
  ></jlc-table>
</template>

<script setup lang='ts'>
import { JlcTable } from '@sz-jlc/admin-vue3'

const columns = [
  { label: '姓名', prop: 'name', },
  { label: '性别', prop: 'gender', },
  { label: '年龄', rop: 'age', },
  { label: '岗位', prop: 'job', }
]

const tableData = [
  {
    name: '小明',
    gender: '男',
    age: 18,
    job: '前端工程师'
  },
  {
    name: '小红',
    gender: '女',
    age: 19,
    job: '测试工程师'
  },
  {
    name: '小军',
    gender: '男',
    age: 20,
    job: 'Java工程师'
  },
]

const onUpdate = () => {
  console.log('click update')
}

const onDelete = () => {
  console.log('click delete')
}
</script>
