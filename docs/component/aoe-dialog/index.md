<script setup>

</script>

# AoeDialog 新增或编辑弹窗

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

## FilterItem
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
        <td>reset</td>
        <td>重置</td>
        <td>
          <ul class="m-0">
            <li>queryNow(是否执行查询，会传递给reset事件作为回调参数)</li>
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
        <td>-</td>
        <td>-</td>
    </tr>
  </tbody>
</table>
