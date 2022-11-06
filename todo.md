# todo
global.d.ts未生效
增加tree-transfer组件

补充贡献文档

github部署
npm更新


## 贡献
贡献指南
  props怎么写
  global中增加
待解决问题
  global
  withInstall
  ...其他待办项
组件库成长史
  组件ts类型
  打包lib、es、iife
  如何把依赖单独打到一个文件（preserveModules带来的问题，manualChunks的自定义）
如何编写一个文档



## 待办
3. withInstall | NO(待决绝，用上之后props等都没了ts校验)
4.  排查构建产物，是否有多余的内容 | OK(vite.d.ts如何去除待解决)
5.  导出一些外部可能需要的ts类型
6.  打包结果的文件名
7.  解决一些组件bug
8.  按需引入是否生效测试
9.  改成tsx | 暂时不做
10. 样式打进组件 | 暂时不考虑
11. iife中需要给出未压缩和压缩两个版本 | 暂时不做
12. 打包出来的样式名改为index.css
13. 组件样式拆分，然后通过一个总的导出
14. dependencies考虑是否需要改成peerDependencies
15. 增加changelog
16. eslint
17. prettier
19. commitlint
20. 集成单元测试
21. filters可配置折叠
22. table确保可以多级表格，多级表头，合并单元格
23. 可支持配置getData响应数据结构字段
24. page组件文案改成中文


## 规划组件：
jlc-filter
jlc-table
jlc-page
jlc-pro-table
jlc-pro-list
jlc-tree-transfer
jlc-aoe-dialog
jlc-aoe-drawer


## pro-table问题
暂无


### 优化
补充icon：无数据、错误
去除多余的组件功能：update、delete
输入框默认trim
考虑filters、columns配置的通用性，如果更换ui框架，是否能直接套用 | 不考虑更换UI框架
input默认placeholder为请输入


### vue2版本同步修改
去除getEpTableCommonEvents，改用emit传递


## aoe-dialog：
修复aotu-fill-add-form
aoe-drawer是否有必要
修复树形穿梭框，简化用法，增加配置


## 分页表格四种方案：
vnode，hooks中做关联
三合一，props和events包在一个对象中，常用方法、事件取出
抽出关联的hooks，手动绑定到各个组件
connect组件

## 麻烦点：
调用组件方法麻烦 | 针对常用的取出来，不常用的麻烦点没关系
事件透传麻烦 | 针对常用的取出来，不常用的麻烦点没关系
属性透传麻烦 | 针对常用的取出来，不常用的麻烦点没关系
插槽混乱 | 没有太大关系


## 反馈的问题：
按钮栏不支持扩展 | 已解决
筛选字段可自动从表格列中取 | 不采纳
vnode无响应性 | 已解决
loading显示效果 | 已解决
错误显示 | 已解决
filters需支持配置宽度 | 已解决：支持配置列数即可
增加jsx支持 | 已实现，但待验证是否能正常使用


i-dialog:
1、确认、取消
2、submit，返回promise自动loading
3、默认可拖动
4、全屏切换
5、内部组件可控懒加载


i-drawer：
1、确认、取消
2、submit，返回promise自动loading
3、内部组件可控懒加载

choose:
1、单选
2、多选，需要带确认
3、跨页多选
4、某个字段外部传入值控制
5、共享页面的列
