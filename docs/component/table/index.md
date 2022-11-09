<script setup>
import BaseUse from './example/base-use.vue'
import LoadingError from './example/loading-error.vue'
import UpdateDelete from './example/update-delete.vue'
import ColumnSlot from './example/column-slot.vue'
import '@sz-jlc/admin-vue3/dist/style.css'
</script>

# Table 表格

## 为什么使用？
* 采用JS配置方式生成筛选表单，大部分情况下会比写html稍微方便一点点
* 提供了`loading`状态props
* 提供了`error`状态props
* 最小宽度默认确保了表头不换行
* 默认开启了el-table的`border`、`stripe`
* 默认开启了el-table-column的`resizable`
* 提供了`update`、`delete`配置自动创建对应的编辑和删除按钮
* 内容默认居中

## 基础用法
> 用法基本和el-table一致，不一样的是由template方式转为了JS配置方式；

**支持透传el-table的属性和事件，支持调用el-table的方法。**

<base-use />

``` vue
<template>
  <div style="margin-bottom: 10px;">
    <el-button @click="clearSelection()">clearSelection</el-button>
  </div>
  <jlc-table 
    ref="tableRef" 
    :columns="columns" 
    :data="tableData" 
    @selection-change="onSelectionChange"
  ></jlc-table>
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
}
</script>
```

## loading、error状态
<loading-error />

``` vue{6,14,15}
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
```

## update、delete
<update-delete />

``` vue{5-8}
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
  { label: '年龄', prop: 'age', },
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
```

## TableColumn 插槽
<column-slot />

``` vue{3-7,20}
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
```

## 属性
<table class="base-table props-table">
  <thead>
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
      <th>是否必填</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>columns</td>
      <td>表格列</td>
      <td>TableColumn[]</td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>loading状态</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
      <td>否</td>
    </tr>
    <tr>
      <td>error</td>
      <td>error状态</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
      <td>否</td>
    </tr>
    <tr>
      <td>update</td>
      <td>是否生成编辑按钮</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
      <td>否</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>是否生成删除按钮</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
      <td>否</td>
    </tr>
    <tr>
      <td>el-table的属性</td>
      <td>预期情况下支持所有el-table的属性，若某个场景下存在问题，请反馈。</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
  </tbody>
</table>

### TableColumn
<table class="base-table props-table">
  <thead>
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
      <th>是否必填</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>type</td>
        <td>类型，在el-table基础上增加了一些，会有一些预设效果。</td>
        <td>string</td>
        <td>selection/index/expand/date/time/phone</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>header</td>
        <td>表头渲染函数</td>
        <td>(h: any) => VNode</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>render</td>
        <td>内容渲染函数</td>
        <td>(h: any, row: object, column: object, $index: number) => VNode</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>slot</td>
        <td>表格列插槽</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>el-table-column的属性</td>
        <td>预期情况下支持所有el-table-column的属性，若某个场景下存在问题，请反馈。</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
  </tbody>
</table>

## 方法
<table class="base-table methods-table">
  <thead>
    <tr>
      <th>方法名</th>
      <th>描述</th>
      <th>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>query</td>
      <td>查询</td>
      <td>
        <ul class="m-0">
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>el-table的方法</td>
      <td>预期情况下支持所有el-table的方法，若某个场景下存在问题，请反馈。</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 事件
<table class="base-table events-table">
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update</td>
      <td>update属性为true时，生成的编辑按钮的点击事件</td>
      <td>-</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>delete属性为true时，生成的删除按钮的点击事件</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 插槽
<table class="base-table slots-table">
  <thead>
    <tr>
      <th>插槽</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>-</td>
        <td>-</td>
    </tr>
  </tbody>
</table>
