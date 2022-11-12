"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const layouts_filterPageList_filterPageList_vue = require("./layouts/filter-page-list/filter-page-list.vue.483e4911.js");
const components_filter_index_ts = require("./components/filter/index.ts.63611000.js");
const components_table_src_table_vue = require("./components/table/src/table.vue.6c079a5e.js");
const components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts = require("./components/page/src/page.vue_vue_type_script_setup_true_name_jlc-page_lang.ts.f4f52a34.js");
const components_proTable_src_proTable_vue_vue_type_script_setup_true_name_jlcProTable_lang_ts = require("./components/pro-table/src/pro-table.vue_vue_type_script_setup_true_name_jlc-pro-table_lang.ts.1d5d0c29.js");
const components_treeTransfer_src_treeTransfer_vue = require("./components/tree-transfer/src/tree-transfer.vue.8bd39857.js");
const components_configProvider_src_configProvider_vue_vue_type_script_setup_true_name_jlcConfigProvider_lang_ts = require("./components/config-provider/src/config-provider.vue_vue_type_script_setup_true_name_jlc-config-provider_lang.ts.d1f21300.js");
require("./layouts/filter-page-list/filter-page-list.vue_vue_type_script_lang.ts.b4917f5b.js");
require("vue");
require("./layouts/filter-page-list/filter-page-list.vue_vue_type_style_index_0_scoped_59b2b166_lang.scss.bdfbc770.js");
require("./components/filter/src/filter.vue.e957ae31.js");
require("./components/filter/src/filter.vue_vue_type_script_setup_true_name_jlc-filter_lang.ts.78f3ec4e.js");
require("./utils/tools.ts.8ca40bbc.js");
require("./vendor/index.js.32496a5a.js");
require("./components/filter/src/filter.ts.b086ae19.js");
require("./components/filter/src/filter.vue_vue_type_style_index_0_scoped_91c5ff49_lang.scss.a1f6a493.js");
require("./utils/with-install.ts.bb032c1a.js");
require("./components/table/src/table.vue_vue_type_script_setup_true_name_jlc-table_lang.ts.448d6d5e.js");
require("element-plus");
require("./components/table/src/table.ts.85c6c2e4.js");
require("./components/table/src/table.vue_vue_type_style_index_0_scoped_4a11fadd_lang.scss.bd32812b.js");
require("./constants/index.ts.f7755b2c.js");
require("./components/page/src/page.ts.40166c25.js");
require("./hooks/use-filter-page.ts.095350cc.js");
require("./utils/global-config.ts.3f269d76.js");
require("./components/pro-table/src/utils/index.ts.f81bec1e.js");
require("./utils/ep-table-common.ts.c785f5de.js");
require("./components/pro-table/src/pro-table.ts.b68146bd.js");
require("./components/tree-transfer/src/tree-transfer.vue_vue_type_script_setup_true_name_jlc-tree-transfer_lang.ts.2549b456.js");
require("./components/tree-transfer/src/tree.vue.4a06b25b.js");
require("./components/tree-transfer/src/tree.vue_vue_type_script_setup_true_lang.ts.b907a041.js");
require("./components/tree-transfer/src/constant.ts.5e622eff.js");
require("./components/tree-transfer/src/tree.vue_vue_type_style_index_0_scoped_3a26171a_lang.scss.8a4d6bca.js");
require("./components/tree-transfer/src/tree-transfer.ts.8583dd87.js");
require("./components/tree-transfer/src/tree-transfer.vue_vue_type_style_index_0_scoped_6804a2c7_lang.scss.e4d63000.js");
require("./components/config-provider/src/config-provider.ts.824c814c.js");
const components = [
  layouts_filterPageList_filterPageList_vue.FilterPageList,
  components_filter_index_ts.JlcFilter,
  components_table_src_table_vue.Table,
  components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts._sfc_main,
  components_proTable_src_proTable_vue_vue_type_script_setup_true_name_jlcProTable_lang_ts._sfc_main,
  components_treeTransfer_src_treeTransfer_vue.TreeTransfer,
  components_configProvider_src_configProvider_vue_vue_type_script_setup_true_name_jlcConfigProvider_lang_ts._sfc_main
];
const index = {
  install(app) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  }
};
exports.JlcLayoutFilterPageList = layouts_filterPageList_filterPageList_vue.FilterPageList;
exports.JlcFilter = components_filter_index_ts.JlcFilter;
exports.JlcTable = components_table_src_table_vue.Table;
exports.JlcPage = components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts._sfc_main;
exports.JlcProTable = components_proTable_src_proTable_vue_vue_type_script_setup_true_name_jlcProTable_lang_ts._sfc_main;
exports.JlcTreeTransfer = components_treeTransfer_src_treeTransfer_vue.TreeTransfer;
exports.JlcConfigProvider = components_configProvider_src_configProvider_vue_vue_type_script_setup_true_name_jlcConfigProvider_lang_ts._sfc_main;
exports.default = index;
