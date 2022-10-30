"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const layouts_filterPageList_filterPageList_vue = require("./layouts/filter-page-list/filter-page-list.vue.9af0905a.js");
const components_filter_src_filter_vue = require("./components/filter/src/filter.vue.83eb6321.js");
const components_table_src_table_vue = require("./components/table/src/table.vue.a3761e03.js");
const components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts = require("./components/page/src/page.vue_vue_type_script_setup_true_name_jlc-page_lang.ts.b73d2a2b.js");
const components_proTable_src_proTable_vue_vue_type_script_setup_true_name_jlcProTable_lang_ts = require("./components/pro-table/src/pro-table.vue_vue_type_script_setup_true_name_jlc-pro-table_lang.ts.0f0cd9f7.js");
require("./layouts/filter-page-list/filter-page-list.vue_vue_type_script_lang.ts.b4917f5b.js");
require("vue");
require("./layouts/filter-page-list/filter-page-list.vue_vue_type_style_index_0_scoped_59b2b166_lang.scss.bdfbc770.js");
require("./components/filter/src/filter.vue_vue_type_script_setup_true_name_jlc-filter_lang.ts.cdcedbe1.js");
require("./utils/tools.ts.e948dbc0.js");
require("./vendor/index.js.32496a5a.js");
require("./components/filter/src/filter.ts.b086ae19.js");
require("./components/filter/src/filter.vue_vue_type_style_index_0_scoped_3043d690_lang.scss.df0d93f2.js");
require("./components/table/src/table.vue_vue_type_script_setup_true_name_jlc-table_lang.ts.c0a02c4f.js");
require("element-plus");
require("./utils/ep-table-common.ts.c785f5de.js");
require("./components/table/src/table.ts.85c6c2e4.js");
require("./components/table/src/table.vue_vue_type_style_index_0_scoped_db96baa7_lang.scss.acb9f45b.js");
require("./constants/index.ts.f7755b2c.js");
require("./components/page/src/page.ts.40166c25.js");
require("./hooks/use-filter-page.ts.c26ce3c7.js");
require("./components/pro-table/src/utils/index.ts.f81bec1e.js");
require("./components/pro-table/src/pro-table.ts.b68146bd.js");
const components = [
  layouts_filterPageList_filterPageList_vue.FilterPageList,
  components_filter_src_filter_vue.Filter,
  components_table_src_table_vue.Table,
  components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts._sfc_main,
  components_proTable_src_proTable_vue_vue_type_script_setup_true_name_jlcProTable_lang_ts._sfc_main
];
const index = {
  install(app) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  }
};
exports.JlcLayoutFilterPageList = layouts_filterPageList_filterPageList_vue.FilterPageList;
exports.JlcFilter = components_filter_src_filter_vue.Filter;
exports.JlcTable = components_table_src_table_vue.Table;
exports.JlcPage = components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts._sfc_main;
exports.JlcProTable = components_proTable_src_proTable_vue_vue_type_script_setup_true_name_jlcProTable_lang_ts._sfc_main;
exports.default = index;
