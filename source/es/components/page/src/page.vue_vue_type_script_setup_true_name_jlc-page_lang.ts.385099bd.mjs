import { defineComponent, useAttrs, reactive, resolveComponent, openBlock, createBlock, mergeProps } from "vue";
import { D as DEFAULT_PAGE_SIZE } from "../../../constants/index.ts.fd940317.mjs";
import { p as propsType, e as emitsType } from "./page.ts.b81e0ed4.mjs";
const __default__ = defineComponent({
  name: "jlc-page"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: propsType,
  emits: emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const DEFAULT_CURRENT_PAGE = 1;
    const attrs = useAttrs();
    const initPageInfo = {
      pageNum: attrs.defaultCurrentPage || DEFAULT_CURRENT_PAGE,
      pageSize: attrs.defaultPageSize || DEFAULT_PAGE_SIZE
    };
    const pageInfo = reactive({ ...initPageInfo });
    const onCurrentChange = (current) => {
      pageInfo.pageNum = current;
      query();
    };
    const onSizeChange = (size) => {
      pageInfo.pageSize = size;
      query();
    };
    const query = (queryNow = true) => {
      const _pageInfo = {
        pageNum: pageInfo.pageNum,
        pageSize: pageInfo.pageSize
      };
      emit("query", _pageInfo, queryNow);
      return _pageInfo;
    };
    const setPage = (_pageInfo, queryNow = true) => {
      Object.assign(pageInfo, _pageInfo);
      return query(queryNow);
    };
    const reset = (queryNow = true, resetSize = false) => {
      pageInfo.pageNum = initPageInfo.pageNum;
      if (resetSize) {
        pageInfo.pageSize = initPageInfo.pageSize;
      }
      query(queryNow);
    };
    expose({
      query,
      setPage,
      reset
    });
    return (_ctx, _cache) => {
      const _component_el_pagination = resolveComponent("el-pagination");
      return openBlock(), createBlock(_component_el_pagination, mergeProps(_ctx.$attrs, {
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
export {
  _sfc_main as _
};
