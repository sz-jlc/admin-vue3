"use strict";
const layouts_filterPageList_filterPageList_vue_vue_type_script_lang_ts = require("./filter-page-list.vue_vue_type_script_lang.ts.b4917f5b.js");
const vue = require("vue");
require("./filter-page-list.vue_vue_type_style_index_0_scoped_59b2b166_lang.scss.bdfbc770.js");
const components_filter_src_filter_vue = require("../../components/filter/src/filter.vue.281a89e0.js");
const _hoisted_1 = { class: "ftp-wrap" };
const _hoisted_2 = {
  class: "filter-wrap",
  ref: "filterWrap"
};
const _hoisted_3 = { class: "filter-bottom" };
const _hoisted_4 = {
  class: "list-wrap",
  ref: "listWrap"
};
const _hoisted_5 = { class: "list-bottom" };
const _hoisted_6 = {
  class: "page-wrap",
  ref: "pageWrap"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "filter", {}, void 0, true)
    ], 512),
    vue.createElementVNode("div", _hoisted_3, [
      vue.renderSlot(_ctx.$slots, "filter-bottom", {}, void 0, true)
    ]),
    vue.createElementVNode("div", _hoisted_4, [
      vue.renderSlot(_ctx.$slots, "list", {}, void 0, true)
    ], 512),
    vue.createElementVNode("div", _hoisted_5, [
      vue.renderSlot(_ctx.$slots, "list-bottom", {}, void 0, true)
    ]),
    vue.createElementVNode("div", _hoisted_6, [
      vue.renderSlot(_ctx.$slots, "page", {}, void 0, true)
    ], 512)
  ]);
}
const FilterPageList = /* @__PURE__ */ components_filter_src_filter_vue._export_sfc(layouts_filterPageList_filterPageList_vue_vue_type_script_lang_ts._sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59b2b166"]]);
exports.FilterPageList = FilterPageList;
