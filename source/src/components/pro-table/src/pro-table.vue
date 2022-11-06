<template>
  <layout>
    <template #filter v-if="filters.length">
      <jlc-filter
        ref="filterRef"
        v-bind="(filterProps as any)"
        v-on="filterEvents"
        :filters="filters"
        @query="onFilterQuery"
        @reset="onFilterReset"
      >
        <template v-for="slot in filterSlots" #[slot]="{ bindForm }">
          <slot :name="slot" :bind-form="bindForm" />
        </template>
        <template #filter-ctrl="slotScope">
          <slot name="filter-ctrl" v-bind="slotScope"></slot>
        </template>
      </jlc-filter>
    </template>
    <template #filter-bottom>
      <slot name="filter-bottom"></slot>
    </template>
    <template #list>
      <jlc-table
        ref="tableRef"
        v-bind="(tableProps as any)"
        v-on="withCommonTableEvents"
        :columns="columns"
        :data="data"
        :loading="loading"
        :error="error"
        @query="onTableQuery"
      >
        <template v-for="slot in tableSlots" #[slot]="{ row, column, index }">
          <slot :name="slot" :row="row" :column="column" :index="index"></slot>
        </template>
      </jlc-table>
    </template>
    <template #list-bottom>
      <slot name="table-bottom"></slot>
    </template>
    <template #page v-if="isPage">
      <jlc-page
        ref="pageRef"
        v-bind="(pageProps as any)"
        v-on="pageEvents"
        :total="total"
        @query="onPageQuery"
      />
    </template>
  </layout>
</template>

<script setup lang="ts" name="jlc-pro-table">
  import Layout from '@/layouts/filter-page-list'
  import JlcFilter from '../../filter'
  import JlcTable from '../../table'
  import JlcPage from '../../page'
  import useFilterPage from '@/hooks/use-filter-page'
  import { getOptionSlots } from './utils'
  import {
    getEpTableCommonFns,
    EpTableCommonFns,
    epTableCommonEventNames
  } from '@/utils/ep-table-common'
  import { propsType, emitsType } from './pro-table'
  import type { ExoprtFns } from './pro-table'

  const props = defineProps(propsType)
  const emit = defineEmits(emitsType)

  const createEvents = (eventName: string) => {
    return (...args: any[]) => {
      emit(eventName, ...args)
    }
  }

  const withCommonTableEvents = computed(() => {
    const commonEvents: any = {}
    epTableCommonEventNames.forEach((eventName) => {
      commonEvents[eventName] = createEvents(eventName)
    })
    const result = Object.assign(commonEvents, props.tableEvents)
    return result
  })

  const tableParams = ref({})

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
    onPageQuery,
  } = useFilterPage({ props, emit, params: tableParams })

  const tableRef = ref()

  const onTableQuery = (params: any, queryNow: boolean) => {
    tableParams.value = params || {}
    queryNow && queryData()
  }

  const filterSlots = computed(() => getOptionSlots(props.filters as any[]))
  const tableSlots = computed(() => getOptionSlots(props.columns as any[]))

  const exoprtFns: ExoprtFns & EpTableCommonFns = {
    query,
    refresh,
    setFilter,
    resetFilter,
    setPage,
    resetPage,
    filter: filterRef,
    table: tableRef,
    page: pageRef,
    clearSelection: () => {},
    getSelectionRows: () => {},
    toggleRowSelection: () => {},
    toggleAllSelection: () => {},
    toggleRowExpansion: () => {},
    setCurrentRow: () => {},
  }

  // 将element-plus表格的一些常用方法取出来
  onMounted(() => {
    Object.assign(exoprtFns, getEpTableCommonFns(tableRef.value))
  })

  defineExpose(exoprtFns)
</script>
