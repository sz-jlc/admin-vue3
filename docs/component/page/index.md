<script setup>
import BaseUse from './example/base-use.vue'
</script>

# Page 分页
ProTable的配套组件

## 为什么使用？
* 该组件传入了`el-pagination`的一些预设配置，如果需要为了效果统一，可以使用这个组件
* 监听了页码、页面尺寸变化，统一抛出了`query`事件
* 提供了`reset`接口，用于重置页面

## 基础用法
<base-use />
``` vue
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
      <td>total</td>
      <td>总条数</td>
      <td>number</td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>el-pagination的属性</td>
      <td>预期情况下支持所有el-pagination的属性，若某个场景下存在问题，请反馈。</td>
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
      <td>触发query事件</td>
      <td>
        <ul class="m-0">
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>setPage</td>
      <td>设置page参数</td>
      <td>
        <ul class="m-0">
          <li>pageInfo: { pageNum: number, pageSize: number }</li>
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>reset</td>
      <td>重置</td>
      <td>
        <ul class="m-0">
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
          <li>resetSize(是否重置页面尺寸)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>el-pagination的方法</td>
      <td>预期情况下支持所有el-pagination的方法，若某个场景下存在问题，请反馈。</td>
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
        <td>query</td>
        <td>触发查询时，会在页码、页面尺寸变化时触发</td>
        <td>
          <ul class="m-0">
            <li>pageInfo: { pageSize: number, pageNumber: number }(页面信息)</li>
            <li>queryNow(是否执行查询，通过query方法传入的参数)</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>el-pagination的事件</td>
        <td>预期情况下支持所有el-pagination的事件，若某个场景下存在问题，请反馈。</td>
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
