import { propsType as filterProps } from '@/components/filter/src/filter'
import { propsType as tableProps } from '@/components/table/src/table'
import { epTableCommonEventNames } from '@/utils/ep-table-common'
import type { PropType } from 'vue'
import type { Data } from '@/types'

export interface VueEvents {
  [key: string]: (...args: any[]) => any
}

export const propsType = {
  filters: filterProps.filters,
  columns: tableProps.columns,
  getData: {
    type: Function as PropType<(params?: any) => Promise<Data> | Data>,
    required: true
  },
  initGet: {
    type: Boolean,
    default: true
  },
  isPage: {
    type: Boolean,
    default: true
  },
  filterProps: {
    type: Object,
    default: () => ({})
  },
  filterEvents: {
    type: Object,
    default: () => ({})
  },
  tableProps: {
    type: Object,
    default: () => ({})
  },
  tableEvents: {
    type: Object,
    default: () => ({})
  },
  pageProps: {
    type: Object,
    default: () => ({})
  },
  pageEvents: {
    type: Object,
    default: () => ({})
  },
}

export interface ExoprtFns {
  query: Function
  refresh: Function
  setFilter: Function
  resetFilter: Function
  setPage: Function
  resetPage: Function
  filter: any
  table: any
  page: any
}

export const emitsType = [
  'get-data', 
  'got-data',
  ...epTableCommonEventNames
]
