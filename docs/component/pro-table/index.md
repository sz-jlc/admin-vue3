<script setup>
import BaseUse from './example/base-use.vue'
import ManualQuery from './example/manual-query.vue'
import DefaultPageSize from './example/default-page-size.vue'
import LocalPage from './example/local-page.vue'
import NoPage from './example/no-page.vue'
import TableSelection from './example/table-selection.vue'
</script>

# ProTable 筛选分页表格
将filter、table、page组件再次封装的重型组件，大多数情况下你可能只会使用这一个组件，而不是单独使用那三个组件。

## 为什么使用？
* 将filter、table、page组合起来的组件，内部实现了联动逻辑
* 可传入一个获取数据的方法(`getData`)，自动变换table的`loading`、`error`状态

## 基础用法
> filters、columns配置同filter、table组件

<base-use />

``` vue
<template>
  <jlc-pro-table 
    :filters="filters" 
    :columns="columns" 
    :get-data="getData" 
    :filter-props="{ columnCount: 3 }"
  >
    <template #table-gender="{ row }">
      {{ genderMap[row.gender] }}
    </template>
  </jlc-pro-table>
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

const genderMap = {
  0: '女',
  1: '男'
}

const genderOptions = Object
  .entries(genderMap)
  .map(([value, label]) => ({ value: +value, label }))

const filters = [
  { label: '姓名', key: 'name' },
  { 
    label: '性别', 
    key: 'gender',
    component: 'el-select',
    children: genderOptions.map(item => ({
      component: 'el-option',
      attrs: item
    }))
  },
]

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '性别', slot: 'table-gender'},
  { label: '年龄', prop: 'age' },
  { label: '岗位', prop: 'job' },
  { label: '个人介绍', prop: 'introduction', align: 'left' },
]

const getData = (queryParams: any): Promise<any> => {
  const { name, gender, pageSize, pageNum } = queryParams
  console.log(queryParams)
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
        list: list.slice(lastPage - pageSize, lastPage),
        total: list.length,
      })
    }, Math.random() * 200)
  })
}
</script>
```

## 手动查询
> 有时并不需要初始就执行查询，具体查询时间自己把控，那么就可以关闭初始查询，再调用query方法。

<manual-query />

``` vue{10,65}
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

```

## 初始页面尺寸
<default-page-size />

``` vue{8}
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
```

## 本地分页
> 组件实际上并没有提供本地分页功能（因为本地分页并不常见，同时也为了组件的精简），但我们仍然可以基于getData配置轻松实现本地分页，如确有需要组件自动处理分页，后续可以考虑补充。

<local-page />

``` vue{56,61}
<template>
  <jlc-pro-table 
    :filters="[]" 
    :columns="columns" 
    :get-data="getData" 
    :filter-props="{ columnCount: 3 }"
    :page-props="{ defaultPageSize: 2, pageSizes: [2, 5, 10] }"
  >
    <template #table-gender="{ row }">
      {{ genderMap[row.gender] }}
    </template>
  </jlc-pro-table>
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

const genderMap = {
  0: '女',
  1: '男'
}

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '性别', slot: 'table-gender'},
  { label: '年龄', prop: 'age' },
  { label: '岗位', prop: 'job' },
  { label: '个人介绍', prop: 'introduction', align: 'left' },
]

const getData = (queryParams: any): any => {
  const { pageSize, pageNum } = queryParams
  const list = mockData
  const lastPage = pageNum * pageSize
  return {
    // 模拟分页
    list: list.slice(lastPage - pageSize, lastPage),
    total: list.length,
  }
}
</script>
```

## 不分页
> 不分页实际上就是一个普通的table，`filters`如果为空数组，就不会渲染；
> 如果确信就是一个普通的表格展示，也可以直接使用`Table`组件，但大多数情况下为了后续修改，建议使用`ProTable`

<no-page />

``` vue{6}
<template>
  <jlc-pro-table 
    :filters="[]" 
    :columns="columns" 
    :get-data="getData"
    :is-page="false"
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

const getData = (): any => {
  return {
    list: mockData,
    total: mockData.length
  }
}
</script>
```

## 表格多选
> 实际上如果你看过Table组件的文档，就不需要看以下内容，因为ProTable基本继承于Table组件，但表格多选的功能比较常见，这里还是做一下演示

<table-selection />

``` vue{11,47,66}
<template>
  <div style="margin-bottom: 10px;">
    <el-button @click="clearSelection()">clearSelection</el-button>
  </div>
  <jlc-pro-table 
    ref="proTableRef"
    :filters="[]" 
    :columns="columns" 
    :get-data="getData"
    :filter-props="{ columnCount: 3 }"
    @selection-change="onSelectionChange"
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
  { type: 'selection' },
  { label: '姓名', prop: 'name' },
  { label: '性别', slot: 'table-gender'},
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

const onSelectionChange = (selection: any[]) => {
  console.log(selection)
}
const clearSelection = () => {
  proTableRef.value.clearSelection()
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
      <td>filters</td>
      <td>筛选项列表</td>
      <td>
        <a href="/component/filter/index.html#filteritem" target="_blank">FilterItem[]</a>
      </td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>columns</td>
      <td>表格列</td>
      <td>
        <a href="/component/table/index.html#tablecolumn" target="_blank">TableColumn[]</a>
      </td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>getData</td>
      <td>
        <div>获取数据，需要返回指定的数据格式或者Promise包裹的指定数据格式</div>
        <div>{ list: any[], total: number, // 数据及总条数 }</div>
      </td>
      <td>(params?: any) => Promise&lt;Data&gt; | Data</td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>initGet</td>
      <td>初始是否查询</td>
      <td>boolean</td>
      <td>-</td>
      <td>true</td>
      <td>否</td>
    </tr>
    <tr>
      <td>isPage</td>
      <td>是否分页</td>
      <td>boolean</td>
      <td>-</td>
      <td>true</td>
      <td>否</td>
    </tr>
    <tr>
      <td>filterProps</td>
      <td>传递给Filter组件的属性</td>
      <td>object</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>filterEvents</td>
      <td>传递给Filter组件的事件</td>
      <td>object</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>tableProps</td>
      <td>传递给Table组件的属性</td>
      <td>object</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>tableEvents</td>
      <td>传递给Table组件的事件</td>
      <td>object</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>pageProps</td>
      <td>传递给Page组件的属性</td>
      <td>object</td>
      <td>-</td>
      <td>-</td>
      <td>否</td>
    </tr>
    <tr>
      <td>pageEvents</td>
      <td>传递给Page组件的事件</td>
      <td>object</td>
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
      <td>查询，相当于点击了查询按钮</td>
      <td>-</td>
    </tr>
    <tr>
      <td>refresh</td>
      <td>刷新</td>
      <td>
        <ul class="m-0">
          <li>needResetPage(是否需要重置Page，默认为false)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>setFilter</td>
      <td>设置筛选表单绑定的值</td>
      <td>
        <ul class="m-0">
          <li>filter(值)</li>
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>resetFilter</td>
      <td>重置Filter组件</td>
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
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>resetPage</td>
      <td>重置Page组件</td>
      <td>
        <ul class="m-0">
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Table的一些常用方法</td>
      <td>
        <ul class="m-0">
          <li>clearSelection</li>
          <li>getSelectionRows</li>
          <li>toggleRowSelection</li>
          <li>toggleAllSelection</li>
          <li>toggleRowExpansion</li>
          <li>setCurrentRow</li>
        </ul>
      </td>
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
      <td>get-data</td>
      <td>执行查询时</td>
      <td>
        <ul class="m-0">
          <li>retValue(getData返回的内容，Promise或数据)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>got-data</td>
      <td>获取到数据</td>
      <td>
        <ul class="m-0">
          <li>data(Promise返回的数据或getData返回的数据)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Table组件的一些常用事件</td>
      <td>
        <ul class="m-0">
          <li>select</li>
          <li>select-all</li>
          <li>selection-change</li>
          <li>row-click</li>
          <li>row-dblclick</li>
          <li>sort-change</li>
          <li>current-change</li>
        </ul>
      </td>
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
