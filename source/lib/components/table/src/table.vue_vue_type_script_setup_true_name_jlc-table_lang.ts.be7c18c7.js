"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const utils_tools_ts = require("../../../utils/tools.ts.8ca40bbc.js");
const components_table_src_table_ts = require("./table.ts.85c6c2e4.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-d6b1e295"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "table__state"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "50"
}, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  })
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", null, "\u65E0\u6570\u636E", -1));
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = {
  key: 1,
  class: "table__state"
};
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  width: "50"
}, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  }),
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  })
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", null, "\u7F51\u7EDC\u9519\u8BEF", -1));
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const __default__ = vue.defineComponent({
  name: "jlc-table"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: components_table_src_table_ts.propsType,
  emits: components_table_src_table_ts.emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const tableRef = vue.ref();
    const typeConfigMap = {
      date: {
        width: 120,
        align: "center"
      },
      time: {
        width: 140,
        align: "center"
      },
      phone: {
        width: 120,
        align: "center"
      }
    };
    const handleEditAndDelete = () => {
      const operateColumn = [];
      if (props.update) {
        operateColumn.push(
          (row) => vue.h(
            elementPlus.ElButton,
            {
              link: true,
              type: "primary",
              onClick() {
                emit("update", row);
              }
            },
            () => "\u7F16\u8F91"
          )
        );
      }
      if (props.delete) {
        operateColumn.push(
          (row) => vue.h(
            elementPlus.ElButton,
            {
              link: true,
              type: "danger",
              onClick() {
                emit("delete", row);
              }
            },
            () => "\u5220\u9664"
          )
        );
      }
      if (operateColumn.length) {
        const width = operateColumn.length * 40 + 40;
        return {
          width,
          align: "center",
          label: "\u64CD\u4F5C",
          fixed: "right",
          render(h2, row) {
            return h2(
              "div",
              operateColumn.map((render) => render(row))
            );
          }
        };
      }
    };
    const handledColumns = vue.computed(() => {
      const result = props.columns.map((item) => {
        const { type } = item;
        return {
          ...item,
          ...type in typeConfigMap ? typeConfigMap[type] : {},
          align: item.align || "center",
          resizable: utils_tools_ts.isEmpty(item.resizable) ? true : item.resizable,
          minWidth: utils_tools_ts.isEmpty(item.minWidth) ? item.label ? item.label.length * 15 + 24 : 20 : item.minWidth
        };
      });
      const operateColumn = handleEditAndDelete();
      if (operateColumn) {
        result.push(operateColumn);
      }
      return result;
    });
    const exoprtFns = {
      clearSelection: () => {
      },
      getSelectionRows: () => {
      },
      toggleRowSelection: () => {
      },
      toggleAllSelection: () => {
      },
      toggleRowExpansion: () => {
      },
      setCurrentRow: () => {
      },
      clearSort: () => {
      },
      clearFilter: () => {
      },
      doLayout: () => {
      },
      sort: () => {
      },
      scrollTo: () => {
      },
      setScrollTop: () => {
      },
      setScrollLeft: () => {
      }
    };
    vue.onMounted(() => {
      Object.keys(exoprtFns).forEach((key) => {
        exoprtFns[key] = tableRef.value[key];
      });
    });
    expose(exoprtFns);
    return (_ctx, _cache) => {
      const _component_el_table_column = vue.resolveComponent("el-table-column");
      const _component_el_table = vue.resolveComponent("el-table");
      const _directive_loading = vue.resolveDirective("loading");
      return vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_table, vue.mergeProps({
        ref_key: "tableRef",
        ref: tableRef
      }, _ctx.$attrs, {
        stripe: "",
        border: ""
      }), {
        empty: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", null, [
            !_ctx.error ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_4)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, _hoisted_8))
          ], 512), [
            [vue.vShow, !_ctx.loading]
          ])
        ]),
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(handledColumns), (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_el_table_column, vue.mergeProps({ key: index }, item), vue.createSlots({
              default: vue.withCtx(({ row, column, $index }) => [
                item.slot ? vue.renderSlot(_ctx.$slots, item.slot, {
                  key: 0,
                  row,
                  column,
                  index: $index
                }, void 0, true) : item.render ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.render(vue.h, row, column, $index)), { key: 1 })) : vue.createCommentVNode("", true)
              ]),
              _: 2
            }, [
              item.header ? {
                name: "header",
                fn: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.header(vue.h))))
                ]),
                key: "0"
              } : void 0
            ]), 1040);
          }), 128))
        ]),
        _: 3
      }, 16)), [
        [_directive_loading, _ctx.loading]
      ]);
    };
  }
});
exports._sfc_main = _sfc_main;
