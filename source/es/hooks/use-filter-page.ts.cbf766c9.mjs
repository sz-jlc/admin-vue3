import { ref, computed, onMounted } from "vue";
import { D as DEFAULT_PAGE_SIZE } from "../constants/index.ts.fd940317.mjs";
const useFilterPage = ({ props, emit, params }) => {
  const filterRef = ref();
  const pageRef = ref();
  const total = ref(0);
  const data = ref([]);
  const loading = ref(false);
  const error = ref(false);
  const filterParams = ref({});
  const pageParams = ref({});
  const queryParams = computed(() => {
    const pageInfo = {
      pageNum: 1,
      pageSize: DEFAULT_PAGE_SIZE,
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
    queryNow && query();
  };
  const onFilterReset = (params2, queryNow) => {
    filterParams.value = params2 || {};
    if (pageRef.value) {
      pageRef.value.reset(false);
    }
    queryNow && query();
  };
  const onPageQuery = (params2, queryNow) => {
    pageParams.value = params2 || {};
    queryNow && query();
  };
  const resetFilter = (queryNow = true) => {
    filterRef.value.reset(queryNow);
  };
  const resetPage = (queryNow = true) => {
    if (pageRef.value) {
      pageRef.value.reset(queryNow);
    }
  };
  const refresh = (needResetPage = false) => {
    if (needResetPage) {
      resetPage(false);
    }
    query();
  };
  const query = () => {
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
  const handleQueryData = (queryData) => {
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
    if (typeof queryData !== "object" || typeof queryData.total !== "number" || !Array.isArray(queryData.list)) {
      throwErr();
    }
    data.value = queryData.list;
    total.value = queryData.total || 0;
    error.value = false;
    emit("got-data", queryData);
  };
  if (props.initGet) {
    onMounted(() => {
      if (filterRef.value) {
        filterRef.value.query();
      } else {
        query();
      }
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
    refresh,
    resetFilter,
    resetPage,
    query,
    handleQuery,
    handleQueryData
  };
};
export {
  useFilterPage as u
};
