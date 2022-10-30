import { DEFAULT_PAGE_SIZE } from '@/constants'
import JlcFilter from '@/components/filter'
import JlcPage from '@/components/page'

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

type FilterType = InstanceType<typeof JlcFilter>
type PageType = InstanceType<typeof JlcPage>

const useFilterPage = ({ props, emit, params }: Params) => {
  const filterRef = ref<FilterType>()
  const pageRef = ref<PageType>()

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
    queryNow && query()
  }
  const onFilterReset = (params: any, queryNow: boolean) => {
    filterParams.value = params || {}
    if (pageRef.value) {
      pageRef.value.reset(false)
    }
    queryNow && query()
  }

  const onPageQuery = (params: any, queryNow: boolean) => {
    pageParams.value = params || {}
    queryNow && query()
  }

  const resetFilter = (queryNow = true) => {
    filterRef.value!.reset(queryNow)
  }

  const resetPage = (queryNow = true) => {
    // 可能未分页，无page组件
    if (pageRef.value) {
      pageRef.value!.reset(queryNow)
    }
  }

  const refresh = (needResetPage = false): void => {
    if (needResetPage) {
      resetPage(false)
    }
    query()
  }
  
  const query = () => {
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

  if (props.initGet) {
    onMounted(() => {
      // 如果存在filter，则让filter触发query，以携带上初始的queryParams
      if (filterRef.value) {
        filterRef.value.query()
      } else {
        query()
      }
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
    refresh,
    resetFilter,
    resetPage,
    query,
    handleQuery,
    handleQueryData,
  }
}

export default useFilterPage
