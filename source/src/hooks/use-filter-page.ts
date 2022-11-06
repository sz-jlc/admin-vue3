import { DEFAULT_PAGE_SIZE } from '@/constants'
import type { Ref } from 'vue'
import type { Data } from '@/types'

interface Params {
  props: {
    isPage?: boolean
    getData?: Function
    initGet?: boolean
  }
  emit: any
  params: Ref
}

const useFilterPage = ({ props, emit, params }: Params) => {
  const filterRef = ref()
  const pageRef = ref()

  const total = ref(0)
  const data = ref<unknown[]>([])
  const loading = ref(false)
  const error = ref(false)

  const filterParams = ref({})

  const pageParams = ref({})
  const queryParams = computed(() => {
    const pageInfo = {
      pageNum: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      ...pageParams.value,
    }
    const result = {
      ...filterParams.value,
      ...params.value,
    }
    if (props.isPage) {
      Object.assign(result, pageInfo)
    }
    return result
  })

  const onFilterQuery = (params: any, queryNow: boolean) => {
    filterParams.value = params || {}
    queryNow && queryData()
  }
  const onFilterReset = (params: any, queryNow: boolean) => {
    filterParams.value = params || {}
    if (pageRef.value) {
      pageRef.value.reset(false)
    }
    queryNow && queryData()
  }
  const onPageQuery = (params: any, queryNow: boolean) => {
    pageParams.value = params || {}
    queryNow && queryData()
  }

  const setFilter = (filter: object, queryNow = true) => {
    if (filterRef.value) {
      return filterRef.value.setFilter(filter, queryNow)
    }
  }
  const resetFilter = (queryNow = true) => {
    if (filterRef.value) {
      filterRef.value.reset(queryNow)
    }
  }
  const setPage = (pageInfo: object, queryNow = true) => {
    // 可能未分页，无page组件
    if (pageRef.value) {
      pageRef.value.setPage(pageInfo, queryNow)
    }
  }
  const resetPage = (queryNow = true, resetSize = false) => {
    // 可能未分页，无page组件
    if (pageRef.value) {
      pageRef.value!.reset(queryNow, resetSize)
    }
  }

  const refresh = (needResetPage = false): void => {
    if (needResetPage) {
      resetPage(false)
    }
    queryData()
  }
  
  const queryData = () => {
    if (!props.getData) return
    const retValue = props.getData(queryParams.value)
    if (retValue instanceof Promise) {
      loading.value = true
      handleQuery(retValue)
    } else {
      handleQueryData(retValue)
    }

    emit('get-data', retValue)
  }

  let queryTaskCount = 0
  const handleQuery = (promise: Promise<Data>) => {
    queryTaskCount++
    promise
      .then((res) => {
        handleQueryData(res)
      })
      .catch(() => {
        if (queryTaskCount <= 1) {
          data.value = []
          error.value = true
          total.value = 0
        }
      })
      .finally(() => {
        if (queryTaskCount <= 1) {
          loading.value = false
        }
        queryTaskCount--
      })
  }

  const handleQueryData = (queryData: Data) => {
    const throwErr = () => {
      const errMsg = `
      [jlc-table] getData接收到的数据结构有误，要求如下：

        {
          list: array, // 列表数据
          total: number, // 总条数
        }
      `
      throw new Error(errMsg)
    }
    if (
      typeof queryData !== 'object' ||
      typeof queryData.total !== 'number' ||
      !Array.isArray(queryData.list)
    ) {
      throwErr()
    }
    data.value = queryData.list
    total.value = queryData.total || 0
    error.value = false
    emit('got-data', queryData)
  }

  const query = () => {
    if (filterRef.value) {
      filterRef.value.query(false)
    }
    if (pageRef.value) {
      pageRef.value.query(false)
    }
    queryData()
  }

  if (props.initGet) {
    onMounted(() => {
      query()
    })
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
    handleQueryData,
  }
}

export default useFilterPage
