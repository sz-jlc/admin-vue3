"use strict";
const vue = require("vue");
const constants_index_ts = require("../../../constants/index.ts.f7755b2c.js");
const components_page_src_page_ts = require("./page.ts.40166c25.js");
const __default__ = vue.defineComponent({
  name: "jlc-page"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: components_page_src_page_ts.propsType,
  emits: components_page_src_page_ts.emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const DEFAULT_CURRENT_PAGE = 1;
    const attrs = vue.useAttrs();
    const initPageInfo = {
      pageNum: attrs.defaultCurrentPage || DEFAULT_CURRENT_PAGE,
      pageSize: attrs.defaultPageSize || constants_index_ts.DEFAULT_PAGE_SIZE
    };
    const pageInfo = vue.reactive({ ...initPageInfo });
    const onCurrentChange = (current) => {
      pageInfo.pageNum = current;
      query();
    };
    const onSizeChange = (size) => {
      pageInfo.pageSize = size;
      query();
    };
    const query = (queryNow = true) => {
      emit(
        "query",
        {
          pageNum: pageInfo.pageNum,
          pageSize: pageInfo.pageSize
        },
        queryNow
      );
    };
    const reset = (queryNow = true, resetSize = false) => {
      pageInfo.pageNum = initPageInfo.pageNum;
      if (resetSize) {
        pageInfo.pageSize = initPageInfo.pageSize;
      }
      query(queryNow);
    };
    expose({
      reset
    });
    return (_ctx, _cache) => {
      const _component_el_pagination = vue.resolveComponent("el-pagination");
      return vue.openBlock(), vue.createBlock(_component_el_pagination, vue.mergeProps(_ctx.$attrs, {
        total: props.total,
        "current-page": pageInfo.pageNum,
        "page-size": pageInfo.pageSize,
        "onUpdate:currentPage": onCurrentChange,
        "onUpdate:pageSize": onSizeChange,
        background: "",
        layout: "total, sizes, prev, pager, next, jumper"
      }), null, 16, ["total", "current-page", "page-size"]);
    };
  }
});
exports._sfc_main = _sfc_main;
