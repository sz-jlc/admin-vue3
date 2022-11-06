# 待优化项

## 全局
1. 每个组件都需要挂载install方法，但目前使用了withInstall后，组件ts校验丢失，具体原因不明
2. 提供全局配置，比如getData的响应数据结构、Filter的默认columnCount、Page的默认pageSize等
3. 导出一些外部可能需要的ts类型

## Filter
1. 可配置折叠
2. ~~增加filter-ctrl插槽(已完成)~~
3. ~~提供setFilters方法(已完成)~~
4. ~~表单元素默认placeholder(已完成)~~
5. ~~filter-ctrl去除margin-left(已完成)~~
6. ~~输入框默认trim(已完成)~~

## Table
1. 尝试设置表头不换行即可，不用计算最小宽度
2. loading、error状态支持插槽替换，且缺少icon
3. ~~将el-table的方法全部抽出来(已完成)~~
4. loading显示在表格内部，而不是遮挡住整个表格

## Page
1. ~~提供setPage方法(已完成)~~
2. 设置了defaultPageSize，还需要配置pageSies才能生效

## ProTable
1. ~~提供query方法(已完成)~~
2. ~~透传props、events类型校验问题(已完成)~~
