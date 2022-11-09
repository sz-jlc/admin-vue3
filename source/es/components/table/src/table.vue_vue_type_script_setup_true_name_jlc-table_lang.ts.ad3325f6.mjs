import { defineComponent, ref, computed, onMounted, resolveComponent, resolveDirective, withDirectives, openBlock, createBlock, mergeProps, withCtx, createElementVNode, createElementBlock, vShow, Fragment, renderList, unref, createSlots, renderSlot, resolveDynamicComponent, h, createCommentVNode, pushScopeId, popScopeId } from "vue";
import { ElButton } from "element-plus";
import { i as isEmpty } from "../../../utils/tools.ts.e8d38fbf.mjs";
import { p as propsType, e as emitsType } from "./table.ts.d33ed4fb.mjs";
const _withScopeId = (n) => (pushScopeId("data-v-4a11fadd"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "table__state"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u65E0\u6570\u636E", -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "table__state"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, "\u7F51\u7EDC\u9519\u8BEF", -1));
const _hoisted_6 = [
  _hoisted_5
];
const __default__ = defineComponent({
  name: "jlc-table"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: propsType,
  emits: emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const tableRef = ref();
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
          (row) => h(
            ElButton,
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
          (row) => h(
            ElButton,
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
    const handledColumns = computed(() => {
      const result = props.columns.map((item) => {
        const { type } = item;
        return {
          ...item,
          ...type in typeConfigMap ? typeConfigMap[type] : {},
          align: item.align || "center",
          resizable: isEmpty(item.resizable) ? true : item.resizable,
          minWidth: isEmpty(item.minWidth) ? item.label ? item.label.length * 15 + 24 : 20 : item.minWidth
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
    onMounted(() => {
      Object.keys(exoprtFns).forEach((key) => {
        exoprtFns[key] = tableRef.value[key];
      });
    });
    expose(exoprtFns);
    return (_ctx, _cache) => {
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _directive_loading = resolveDirective("loading");
      return withDirectives((openBlock(), createBlock(_component_el_table, mergeProps({
        ref_key: "tableRef",
        ref: tableRef
      }, _ctx.$attrs, {
        stripe: "",
        border: ""
      }), {
        empty: withCtx(() => [
          withDirectives(createElementVNode("div", null, [
            !_ctx.error ? (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3)) : (openBlock(), createElementBlock("div", _hoisted_4, _hoisted_6))
          ], 512), [
            [vShow, !_ctx.loading]
          ])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(handledColumns), (item, index) => {
            return openBlock(), createBlock(_component_el_table_column, mergeProps({ key: index }, item), createSlots({
              default: withCtx(({ row, column, $index }) => [
                item.slot ? renderSlot(_ctx.$slots, item.slot, {
                  key: 0,
                  row,
                  column,
                  index: $index
                }, void 0, true) : item.render ? (openBlock(), createBlock(resolveDynamicComponent(item.render(h, row, column, $index)), { key: 1 })) : createCommentVNode("", true)
              ]),
              _: 2
            }, [
              item.header ? {
                name: "header",
                fn: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(item.header(h))))
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
export {
  _sfc_main as _
};
