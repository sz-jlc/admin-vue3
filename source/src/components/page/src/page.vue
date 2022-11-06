<template>
  <el-pagination
    v-bind="$attrs"
    :total="props.total"
    :current-page="pageInfo.pageNum"
    :page-size="pageInfo.pageSize"
    @update:current-page="onCurrentChange"
    @update:page-size="onSizeChange"
    background
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>

<script setup lang="ts" name="jlc-page">
  import { DEFAULT_PAGE_SIZE } from '@/constants'
  import { propsType, emitsType } from './page'
  import type { PageInfo } from './page'

  const props = defineProps(propsType)

  const emit = defineEmits(emitsType)

  const DEFAULT_CURRENT_PAGE = 1

  const attrs = useAttrs()

  const initPageInfo = {
    pageNum: (attrs.defaultCurrentPage as number) || DEFAULT_CURRENT_PAGE,
    pageSize: (attrs.defaultPageSize as number) || DEFAULT_PAGE_SIZE,
  }

  const pageInfo: PageInfo = reactive({ ...initPageInfo })

  const onCurrentChange = (current: number) => {
    pageInfo.pageNum = current
    query()
  }

  const onSizeChange = (size: number) => {
    pageInfo.pageSize = size
    query()
  }

  const query = (queryNow = true) => {
    const _pageInfo = {
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize,
    }
    emit('query', _pageInfo, queryNow)
    return _pageInfo
  }

  const setPage = (_pageInfo: object, queryNow = true) => {
    Object.assign(pageInfo, _pageInfo)
    return query(queryNow)
  }

  const reset = (queryNow = true, resetSize = false) => {
    pageInfo.pageNum = initPageInfo.pageNum
    if (resetSize) {
      pageInfo.pageSize = initPageInfo.pageSize
    }
    query(queryNow)
  }

  defineExpose({
    query,
    setPage,
    reset,
  })
</script>
