import { _ as _sfc_main } from "./filter-page-list.vue_vue_type_script_lang.ts.2a313087.mjs";
import { openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
import "./filter-page-list.vue_vue_type_style_index_0_scoped_59b2b166_lang.scss.42757383.mjs";
import { _ as _export_sfc } from "../../components/filter/src/filter.vue.2c901e8f.mjs";
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
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "filter", {}, void 0, true)
    ], 512),
    createElementVNode("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "filter-bottom", {}, void 0, true)
    ]),
    createElementVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "list", {}, void 0, true)
    ], 512),
    createElementVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "list-bottom", {}, void 0, true)
    ]),
    createElementVNode("div", _hoisted_6, [
      renderSlot(_ctx.$slots, "page", {}, void 0, true)
    ], 512)
  ]);
}
const FilterPageList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59b2b166"]]);
export {
  FilterPageList as F
};
