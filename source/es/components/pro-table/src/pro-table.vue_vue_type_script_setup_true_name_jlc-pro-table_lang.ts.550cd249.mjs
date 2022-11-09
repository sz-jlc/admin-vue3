import { defineComponent, computed, ref, onMounted, openBlock, createBlock, unref, createSlots, withCtx, renderSlot, createVNode, mergeProps, toHandlers, renderList, normalizeProps, guardReactiveProps } from "vue";
import { F as FilterPageList } from "../../../layouts/filter-page-list/filter-page-list.vue.2f793a0f.mjs";
import { F as Filter } from "../../filter/src/filter.vue.e6339c61.mjs";
import { T as Table } from "../../table/src/table.vue.9617221e.mjs";
import { _ as _sfc_main$1 } from "../../page/src/page.vue_vue_type_script_setup_true_name_jlc-page_lang.ts.385099bd.mjs";
import { u as useFilterPage } from "../../../hooks/use-filter-page.ts.d89b5068.mjs";
import { g as getOptionSlots } from "./utils/index.ts.997bdfa6.mjs";
import { g as getEpTableCommonFns, e as epTableCommonEventNames } from "../../../utils/ep-table-common.ts.e9c47ca3.mjs";
import { p as propsType, e as emitsType } from "./pro-table.ts.0ee7f509.mjs";
const __default__ = defineComponent({
  name: "jlc-pro-table"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: propsType,
  emits: emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const createEvents = (eventName) => {
      return (...args) => {
        emit(eventName, ...args);
      };
    };
    const withCommonTableEvents = computed(() => {
      const commonEvents = {};
      epTableCommonEventNames.forEach((eventName) => {
        commonEvents[eventName] = createEvents(eventName);
      });
      const result = Object.assign(commonEvents, props.tableEvents);
      return result;
    });
    const tableParams = ref({});
    const {
      filterRef,
      pageRef,
      total,
      data,
      loading,
      error,
      query,
      queryData,
      refresh,
      setFilter,
      resetFilter,
      setPage,
      resetPage,
      onFilterQuery,
      onFilterReset,
      onPageQuery
    } = useFilterPage({ props, emit, params: tableParams });
    const tableRef = ref();
    const onTableQuery = (params, queryNow) => {
      tableParams.value = params || {};
      queryNow && queryData();
    };
    const filterSlots = computed(() => getOptionSlots(props.filters));
    const tableSlots = computed(() => getOptionSlots(props.columns));
    const exoprtFns = {
      query,
      refresh,
      setFilter,
      resetFilter,
      setPage,
      resetPage,
      filter: filterRef,
      table: tableRef,
      page: pageRef,
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
      }
    };
    onMounted(() => {
      Object.assign(exoprtFns, getEpTableCommonFns(tableRef.value));
    });
    expose(exoprtFns);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(FilterPageList), null, createSlots({
        "filter-bottom": withCtx(() => [
          renderSlot(_ctx.$slots, "filter-bottom")
        ]),
        list: withCtx(() => [
          createVNode(unref(Table), mergeProps({
            ref_key: "tableRef",
            ref: tableRef
          }, _ctx.tableProps, toHandlers(unref(withCommonTableEvents)), {
            columns: _ctx.columns,
            data: unref(data),
            loading: unref(loading),
            error: unref(error),
            onQuery: onTableQuery
          }), createSlots({ _: 2 }, [
            renderList(unref(tableSlots), (slot) => {
              return {
                name: slot,
                fn: withCtx(({ row, column, index }) => [
                  renderSlot(_ctx.$slots, slot, {
                    row,
                    column,
                    index
                  })
                ])
              };
            })
          ]), 1040, ["columns", "data", "loading", "error"])
        ]),
        "list-bottom": withCtx(() => [
          renderSlot(_ctx.$slots, "table-bottom")
        ]),
        _: 2
      }, [
        _ctx.filters.length ? {
          name: "filter",
          fn: withCtx(() => [
            createVNode(unref(Filter), mergeProps({
              ref_key: "filterRef",
              ref: filterRef
            }, _ctx.filterProps, toHandlers(_ctx.filterEvents), {
              filters: _ctx.filters,
              onQuery: unref(onFilterQuery),
              onReset: unref(onFilterReset)
            }), createSlots({
              "filter-ctrl": withCtx((slotScope) => [
                renderSlot(_ctx.$slots, "filter-ctrl", normalizeProps(guardReactiveProps(slotScope)))
              ]),
              _: 2
            }, [
              renderList(unref(filterSlots), (slot) => {
                return {
                  name: slot,
                  fn: withCtx(({ bindForm }) => [
                    renderSlot(_ctx.$slots, slot, { bindForm })
                  ])
                };
              })
            ]), 1040, ["filters", "onQuery", "onReset"])
          ]),
          key: "0"
        } : void 0,
        _ctx.isPage ? {
          name: "page",
          fn: withCtx(() => [
            createVNode(unref(_sfc_main$1), mergeProps({
              ref_key: "pageRef",
              ref: pageRef
            }, _ctx.pageProps, toHandlers(_ctx.pageEvents), {
              total: unref(total),
              onQuery: unref(onPageQuery)
            }), null, 16, ["total", "onQuery"])
          ]),
          key: "1"
        } : void 0
      ]), 1024);
    };
  }
});
export {
  _sfc_main as _
};
