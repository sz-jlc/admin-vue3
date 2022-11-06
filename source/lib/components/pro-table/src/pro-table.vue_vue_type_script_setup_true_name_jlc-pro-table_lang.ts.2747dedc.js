"use strict";
const vue = require("vue");
const layouts_filterPageList_filterPageList_vue = require("../../../layouts/filter-page-list/filter-page-list.vue.d3a53a72.js");
const components_filter_src_filter_vue = require("../../filter/src/filter.vue.281a89e0.js");
const components_table_src_table_vue = require("../../table/src/table.vue.b053509c.js");
const components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts = require("../../page/src/page.vue_vue_type_script_setup_true_name_jlc-page_lang.ts.f4f52a34.js");
const hooks_useFilterPage_ts = require("../../../hooks/use-filter-page.ts.c36f80ce.js");
const components_proTable_src_utils_index_ts = require("./utils/index.ts.f81bec1e.js");
const utils_epTableCommon_ts = require("../../../utils/ep-table-common.ts.c785f5de.js");
const components_proTable_src_proTable_ts = require("./pro-table.ts.b68146bd.js");
const __default__ = vue.defineComponent({
  name: "jlc-pro-table"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: components_proTable_src_proTable_ts.propsType,
  emits: components_proTable_src_proTable_ts.emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const createEvents = (eventName) => {
      return (...args) => {
        emit(eventName, ...args);
      };
    };
    const withCommonTableEvents = vue.computed(() => {
      const commonEvents = {};
      utils_epTableCommon_ts.epTableCommonEventNames.forEach((eventName) => {
        commonEvents[eventName] = createEvents(eventName);
      });
      const result = Object.assign(commonEvents, props.tableEvents);
      return result;
    });
    const tableParams = vue.ref({});
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
    } = hooks_useFilterPage_ts.useFilterPage({ props, emit, params: tableParams });
    const tableRef = vue.ref();
    const onTableQuery = (params, queryNow) => {
      tableParams.value = params || {};
      queryNow && queryData();
    };
    const filterSlots = vue.computed(() => components_proTable_src_utils_index_ts.getOptionSlots(props.filters));
    const tableSlots = vue.computed(() => components_proTable_src_utils_index_ts.getOptionSlots(props.columns));
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
    vue.onMounted(() => {
      Object.assign(exoprtFns, utils_epTableCommon_ts.getEpTableCommonFns(tableRef.value));
    });
    expose(exoprtFns);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(layouts_filterPageList_filterPageList_vue.FilterPageList), null, vue.createSlots({
        "filter-bottom": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "filter-bottom")
        ]),
        list: vue.withCtx(() => [
          vue.createVNode(vue.unref(components_table_src_table_vue.Table), vue.mergeProps({
            ref_key: "tableRef",
            ref: tableRef
          }, _ctx.tableProps, vue.toHandlers(vue.unref(withCommonTableEvents)), {
            columns: _ctx.columns,
            data: vue.unref(data),
            loading: vue.unref(loading),
            error: vue.unref(error),
            onQuery: onTableQuery
          }), vue.createSlots({ _: 2 }, [
            vue.renderList(vue.unref(tableSlots), (slot) => {
              return {
                name: slot,
                fn: vue.withCtx(({ row, column, index }) => [
                  vue.renderSlot(_ctx.$slots, slot, {
                    row,
                    column,
                    index
                  })
                ])
              };
            })
          ]), 1040, ["columns", "data", "loading", "error"])
        ]),
        "list-bottom": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "table-bottom")
        ]),
        _: 2
      }, [
        _ctx.filters.length ? {
          name: "filter",
          fn: vue.withCtx(() => [
            vue.createVNode(vue.unref(components_filter_src_filter_vue.Filter), vue.mergeProps({
              ref_key: "filterRef",
              ref: filterRef
            }, _ctx.filterProps, vue.toHandlers(_ctx.filterEvents), {
              filters: _ctx.filters,
              onQuery: vue.unref(onFilterQuery),
              onReset: vue.unref(onFilterReset)
            }), vue.createSlots({
              "filter-ctrl": vue.withCtx((slotScope) => [
                vue.renderSlot(_ctx.$slots, "filter-ctrl", vue.normalizeProps(vue.guardReactiveProps(slotScope)))
              ]),
              _: 2
            }, [
              vue.renderList(vue.unref(filterSlots), (slot) => {
                return {
                  name: slot,
                  fn: vue.withCtx(({ bindForm }) => [
                    vue.renderSlot(_ctx.$slots, slot, { bindForm })
                  ])
                };
              })
            ]), 1040, ["filters", "onQuery", "onReset"])
          ]),
          key: "0"
        } : void 0,
        _ctx.isPage ? {
          name: "page",
          fn: vue.withCtx(() => [
            vue.createVNode(vue.unref(components_page_src_page_vue_vue_type_script_setup_true_name_jlcPage_lang_ts._sfc_main), vue.mergeProps({
              ref_key: "pageRef",
              ref: pageRef
            }, _ctx.pageProps, vue.toHandlers(_ctx.pageEvents), {
              total: vue.unref(total),
              onQuery: vue.unref(onPageQuery)
            }), null, 16, ["total", "onQuery"])
          ]),
          key: "1"
        } : void 0
      ]), 1024);
    };
  }
});
exports._sfc_main = _sfc_main;
