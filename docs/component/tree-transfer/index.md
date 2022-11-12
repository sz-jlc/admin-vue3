<script setup>
import BaseUse from './example/base-use.vue'
import CustomField from './example/custom-field.vue'
import InitTarget from './example/init-target.vue'
</script>

# TreeTransfer 树形穿梭框
基于el-tree封装的树形穿梭框

## 基础用法
<base-use />

``` vue
<template>
  <jlc-tree-transfer :data="data" source-title="我是源树标题" target-title="我是目标树标题" />
</template>

<script setup lang='ts'>
import { JlcTreeTransfer } from '@sz-jlc/admin-vue3'

const data = [
  {
    label: "Level one 1",
    id: 1,
    children: [
      {
        label: "Level two 1-1",
        id: 2,
        children: [
          {
            label: "Level three 1-1-1",
            id: 3,
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    id: 4,
    children: [
      {
        label: "Level two 2-1",
        id: 5,
        children: [
          {
            label: "Level three 2-1-1",
            id: 6,
          },
        ],
      },
      {
        label: "Level two 2-2",
        id: 7,
        children: [
          {
            label: "Level three 2-2-1",
            id: 8,
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    id: 9,
    children: [
      {
        label: "Level two 3-1",
        id: 10,
        children: [
          {
            label: "Level three 3-1-1",
            id: 11,
          },
        ],
      },
      {
        label: "Level two 3-2",
        id: 12,
        children: [
          {
            label: "Level three 3-2-1",
            id: 13,
          },
        ],
      },
    ],
  },
]
</script>
```

## 初始目标数据
<init-target />

``` vue
<template>
  <jlc-tree-transfer :data="data" :target-ids="targetIds"/>
</template>

<script setup lang='ts'>
import { JlcTreeTransfer } from '@sz-jlc/admin-vue3'

const data = [
  {
    label: "Level one 1",
    id: 1,
    children: [
      {
        label: "Level two 1-1",
        id: 2,
        children: [
          {
            label: "Level three 1-1-1",
            id: 3,
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    id: 4,
    children: [
      {
        label: "Level two 2-1",
        id: 5,
        children: [
          {
            label: "Level three 2-1-1",
            id: 6,
          },
        ],
      },
      {
        label: "Level two 2-2",
        id: 7,
        children: [
          {
            label: "Level three 2-2-1",
            id: 8,
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    id: 9,
    children: [
      {
        label: "Level two 3-1",
        id: 10,
        children: [
          {
            label: "Level three 3-1-1",
            id: 11,
          },
        ],
      },
      {
        label: "Level two 3-2",
        id: 12,
        children: [
          {
            label: "Level three 3-2-1",
            id: 13,
          },
        ],
      },
    ],
  },
]

const targetIds = [1, 3, 6]
</script>
```

## 自定义数据字段
> 有时数据结构并不一定符合组件要求，那么就可以自定义数据的字段名，可以配置id字段名，以及理论上支持el-tree的所有props，但目前暂未核实，如有问题请反馈。

<custom-field />

``` vue
<template>
  <jlc-tree-transfer :data="data" :props="props" />
</template>

<script setup lang='ts'>
import { JlcTreeTransfer } from '@sz-jlc/admin-vue3'

const props = {
  children: 'subTree',
  id: 'uid',
  label: 'title'
}

const data = [
  {
    title: "Level one 1",
    uid: 1,
    subTree: [
      {
        title: "Level two 1-1",
        uid: 2,
        subTree: [
          {
            title: "Level three 1-1-1",
            uid: 3,
          },
        ],
      },
    ],
  },
  {
    title: "Level one 2",
    uid: 4,
    subTree: [
      {
        title: "Level two 2-1",
        uid: 5,
        subTree: [
          {
            title: "Level three 2-1-1",
            uid: 6,
          },
        ],
      },
      {
        title: "Level two 2-2",
        uid: 7,
        subTree: [
          {
            title: "Level three 2-2-1",
            uid: 8,
          },
        ],
      },
    ],
  },
  {
    title: "Level one 3",
    uid: 9,
    subTree: [
      {
        title: "Level two 3-1",
        uid: 10,
        subTree: [
          {
            title: "Level three 3-1-1",
            uid: 11,
          },
        ],
      },
      {
        title: "Level two 3-2",
        uid: 12,
        subTree: [
          {
            title: "Level three 3-2-1",
            uid: 13,
          },
        ],
      },
    ],
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
      <td>data</td>
      <td>树形数据</td>
      <td>Object[]</td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>targetIds</td>
      <td>目标数据id列表</td>
      <td>any[]</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>props</td>
      <td>自定义字段名，详细配置见下文</td>
      <td>Object</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>sourceTitle</td>
      <td>源树标题</td>
      <td>string</td>
      <td>-</td>
      <td>源</td>
      <td>否</td>
    </tr>
    <tr>
      <td>targetTitle</td>
      <td>目标树标题</td>
      <td>string</td>
      <td>-</td>
      <td>目标</td>
      <td>否</td>
    </tr>
  </tbody>
</table>

### Props
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
      <td>id</td>
      <td>唯一id的字段名，不同子集下的id也要不一样</td>
      <td>any</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>parentId</td>
      <td>父级id</td>
      <td>any</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>el-tree的props</td>
      <td>预期情况下支持所有el-tree的props，若某个场景下存在问题，请反馈。</td>
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
      <td>getSourceNodes</td>
      <td>获取源树节点</td>
      <td>-</td>
    </tr>
    <tr>
      <td>getTargetNodes</td>
      <td>获取目标树节点</td>
      <td>-</td>
    </tr>
    <tr>
      <td>getCommonNodes</td>
      <td>获取源树和目标树均有的节点</td>
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
      <td>-</td>
      <td>-</td>
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
        <td>middle</td>
        <td>源树和目标树中间的操作按钮，可接收到两个方法：toTarget、toSource</td>
    </tr>
  </tbody>
</table>
