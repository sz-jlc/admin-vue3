"use strict";
const vue = require("vue");
const constants_index_ts = require("../constants/index.ts.f7755b2c.js");
const utils_globalConfig_ts = require("../utils/global-config.ts.3f269d76.js");
const useFilterPage = ({ props, emit, params }) => {
  const globalConfig = vue.inject(utils_globalConfig_ts.configProviderContextKey, {});
  const filterRef = vue.ref();
  const pageRef = vue.ref();
  const total = vue.ref(0);
  const data = vue.ref([]);
  const loading = vue.ref(false);
  const error = vue.ref(false);
  const filterParams = vue.ref({});
  const pageParams = vue.ref({});
  const queryParams = vue.computed(() => {
    const pageInfo = {
      pageNum: 1,
      pageSize: constants_index_ts.DEFAULT_PAGE_SIZE,
      ...pageParams.value
    };
    const result = {
      ...filterParams.value,
      ...params.value
    };
    if (props.isPage) {
      Object.assign(result, pageInfo);
    }
    return result;
  });
  const onFilterQuery = (params2, queryNow) => {
    filterParams.value = params2 || {};
    queryNow && queryData();
  };
  const onFilterReset = (params2, queryNow) => {
    filterParams.value = params2 || {};
    if (pageRef.value) {
      pageRef.value.reset(false);
    }
    queryNow && queryData();
  };
  const onPageQuery = (params2, queryNow) => {
    pageParams.value = params2 || {};
    queryNow && queryData();
  };
  const setFilter = (filter, queryNow = true) => {
    if (filterRef.value) {
      return filterRef.value.setFilter(filter, queryNow);
    }
  };
  const resetFilter = (queryNow = true) => {
    if (filterRef.value) {
      filterRef.value.reset(queryNow);
    }
  };
  const setPage = (pageInfo, queryNow = true) => {
    if (pageRef.value) {
      pageRef.value.setPage(pageInfo, queryNow);
    }
  };
  const resetPage = (queryNow = true, resetSize = false) => {
    if (pageRef.value) {
      pageRef.value.reset(queryNow, resetSize);
    }
  };
  const refresh = (needResetPage = false) => {
    if (needResetPage) {
      resetPage(false);
    }
    queryData();
  };
  const queryData = () => {
    if (!props.getData)
      return;
    const retValue = props.getData(queryParams.value);
    if (retValue instanceof Promise) {
      loading.value = true;
      handleQuery(retValue);
    } else {
      handleQueryData(retValue);
    }
    emit("get-data", retValue);
  };
  let queryTaskCount = 0;
  const handleQuery = (promise) => {
    queryTaskCount++;
    promise.then((res) => {
      handleQueryData(res);
    }).catch(() => {
      if (queryTaskCount <= 1) {
        data.value = [];
        error.value = true;
        total.value = 0;
      }
    }).finally(() => {
      if (queryTaskCount <= 1) {
        loading.value = false;
      }
      queryTaskCount--;
    });
  };
  const handleQueryData = (queryData2) => {
    if (globalConfig == null ? void 0 : globalConfig.transformPageData) {
      queryData2 = globalConfig.transformPageData(queryData2);
    }
    const throwErr = () => {
      const errMsg = `
      [jlc-table] getData\u63A5\u6536\u5230\u7684\u6570\u636E\u7ED3\u6784\u6709\u8BEF\uFF0C\u8981\u6C42\u5982\u4E0B\uFF1A

        {
          list: array, // \u5217\u8868\u6570\u636E
          total: number, // \u603B\u6761\u6570
        }
      `;
      throw new Error(errMsg);
    };
    if (typeof queryData2 !== "object" || typeof queryData2.total !== "number" || !Array.isArray(queryData2.list)) {
      throwErr();
    }
    data.value = queryData2.list;
    total.value = queryData2.total || 0;
    error.value = false;
    emit("got-data", queryData2);
  };
  const query = () => {
    if (filterRef.value) {
      filterRef.value.query(false);
    }
    if (pageRef.value) {
      pageRef.value.query(false);
    }
    queryData();
  };
  if (props.initGet) {
    vue.onMounted(() => {
      query();
    });
  }
  return {
    filterRef,
    pageRef,
    total,
    data,
    loading,
    error,
    onFilterQuery,
    onFilterReset,
    onPageQuery,
    query,
    refresh,
    setFilter,
    resetFilter,
    setPage,
    resetPage,
    queryData,
    handleQuery,
    handleQueryData
  };
};
exports.useFilterPage = useFilterPage;
