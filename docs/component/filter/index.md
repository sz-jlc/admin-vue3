<script setup>
import BaseUse from './example/base-use.vue'
import DefaultValue from './example/default-value.vue'
import AttrsEvents from './example/attrs-events.vue'
import OtherForm from './example/other-form.vue'
import ValueTransform from './example/value-transform.vue'
import ItemSlot from './example/item-slot.vue'
</script>

# Filter 筛选器

## 为什么使用？
* 采用JS配置方式生成筛选表单，大部分情况下会比写html稍微方便一点点
* 自动布局，默认遵循当前ERP**每行5个表单元素**的规则，同时**提供了参数配置该项**
* 提供了`trim`配置，输入框默认会被trim处理
* 提供了`transofrm`配置，有时表单元素绑定的值并不是搜索的值，比如日期选择器
* 提供了`enterQuery`配置（回车触发搜索），默认开启
* 表单元素提供了缺省的`placeholder`
* 表单元素默认传递了`clearable`
* 阻止了表单的默认事件，避免当只有一个表单元素，回车时导致页面刷新

## 基础用法
<base-use />

``` vue
<template>
  <!-- 为了更好的演示效果，此处配置了column-count="3" -->
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '姓名',
    key: 'name',
    component: 'el-input' // 默认即为el-input，这行也可以不写
  }
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
```

## 表单元素的默认值
<default-value />

``` vue{12}
<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '姓名',
    key: 'name',
    value: '嘉立创'
  },
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
```

## 表单元素的属性和事件
<attrs-events />

``` vue{13,16-18}
<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '姓名',
    key: 'name',
    attrs: {
      placeholder: '输入关键词模糊查找'
    },
    events: {
      focus() {
        console.log('focus')
      }
    }
  },
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
```

## 其他表单元素
<other-form />

``` vue{21-25,30,35}
<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const genderOptions = [
  { label: '男', value: 1 },
  { label: '女', value: 0 },
]

const filters = [
  {
    label: '姓名',
    key: 'name',
  },
  {
    label: '性别',
    key: 'gender',
    component: 'el-select',
    children: genderOptions.map(item => ({
      component: 'el-option',
      attrs: item
    }))
  },
  {
    label: '年龄',
    key: 'age',
    component: 'el-input-number'
  },
  {
    label: '生日',
    key: 'birthday',
    compoent: 'el-date-picker'
  }
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
```

## 值转换 transform
> 上一个示例中包含了一个日期选择器，点击查询的时候发现获得的是一个日期对象;
> 或许并不是你想要的格式，那么就可以使用transform配置进行转换。

<value-transform />

``` vue{13-18}
<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery"></jlc-filter>
</template>

<script setup lang='ts'>
import { JlcFilter } from '@sz-jlc/admin-vue3'

const filters = [
  {
    label: '生日',
    key: 'birthday',
    component: 'el-date-picker',
    transform(date?: Date) {
      if (date instanceof Date) {
        return date.toLocaleDateString()
      }
      return date
    }
  }
]

const onQuery = (queryParams) => {
  console.log(queryParams)
}
</script>
```

## FilterItem 插槽
> 有时仅有的配置无法满足某些场景，那么就可以使用插槽选项来实现更高定制化的效果；
> 插槽暴露出了一个`bindForm`，即用于绑定表单的对象（非查询时的表单）。

<item-slot />

``` vue{3,20}
<template>
  <jlc-filter :filters="filters" :column-count="3" @query="onQuery">
    <template #department="{ bindForm }">
      <el-input v-model="bindForm.department" placeholder="请选择">
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
      <td>FilterItem[]</td>
      <td>-</td>
      <td>-</td>
      <td>是</td>
    </tr>
    <tr>
      <td>columnCount</td>
      <td>每行多少个表单元素</td>
      <td>number</td>
      <td>-</td>
      <td>5</td>
      <td>否</td>
    </tr>
  </tbody>
</table>

### FilterItem
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
        <td>component</td>
        <td>组件</td>
        <td>string</td>
        <td>-</td>
        <td>el-input</td>
        <td>否</td>
    </tr>
    <tr>
        <td>key</td>
        <td> 绑定字段</td>
        <td>string | string[]</td>
        <td>-</td>
        <td>-</td>
        <td>是</td>
    </tr>
    <tr>
        <td>value</td>
        <td> 初始值</td>
        <td>any</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>label</td>
        <td>表单label</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>type</td>
        <td>类型，当前仅有一个rangeTime</td>
        <td>string</td>
        <td>rangeTime</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>attrs</td>
        <td>组件属性</td>
        <td>object</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>events</td>
        <td>组件事件</td>
        <td>object</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>slot</td>
        <td>插槽</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>trim</td>
        <td>是否对查询值进行trim处理</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
        <td>否</td>
    </tr>
    <tr>
        <td>transform</td>
        <td>查询值转换函数</td>
        <td>(value: any) =&gt; any</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>flatTransform</td>
        <td>是否拉平转换查询值，当transform返回一个对象时有用</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
        <td>否</td>
    </tr>
    <tr>
        <td>enterQuery</td>
        <td>回车时是否触发查询</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
        <td>否</td>
    </tr>
    <tr>
        <td>clearable</td>
        <td>表单值是否可清除</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
        <td>否</td>
    </tr>
    <tr>
        <td>children</td>
        <td>子元素，通常可用来应对select组件</td>
        <td>object</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>children.component</td>
        <td> 子元素的组件名</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>children.content</td>
        <td>子元素的内容</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>children.render</td>
        <td>子元素的render函数，需要返回一个VNode</td>
        <td>(bindForm?: object) =&gt; VNode</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>children.attrs</td>
        <td>子元素的属性</td>
        <td>object</td>
        <td>-</td>
        <td>-</td>
        <td>否</td>
    </tr>
    <tr>
        <td>children.events</td>
        <td>子元素的事件</td>
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
      <td>查询</td>
      <td>
        <ul class="m-0">
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>setFilter</td>
      <td>设置表单绑定的值</td>
      <td>
        <ul class="m-0">
          <li>filter(值)</li>
          <li>queryNow(是否执行查询，会传递给query事件作为回调参数，默认为true)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>reset</td>
      <td>重置</td>
      <td>
        <ul class="m-0">
          <li>queryNow(是否执行查询，会传递给reset事件作为回调参数，默认为true)</li>
        </ul>
      </td>
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
        <td>触发查询时，会在输入框回车、点击查询、外部调用query方法时触发</td>
        <td>
          <ul class="m-0">
            <li>queryParams(查询参数)</li>
            <li>queryNow(是否执行查询，通过query方法传入的参数)</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>reset</td>
        <td>触发重置时，会在点击重置、外部调用reset方法时触发</td>
        <td>
          <ul class="m-0">
            <li>queryParams(查询参数)</li>
            <li>queryNow(是否执行查询，通过reset方法传入的参数)</li>
          </ul>
        </td>
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
      <td>filter-ctrl</td>
      <td>表单尾部内容，默认为一个查询按钮和一个重置按钮，可接收到query、reset两个方法。</td>
    </tr>
  </tbody>
</table>
