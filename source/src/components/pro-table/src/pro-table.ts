import { propsType as filterProps } from '@/components/filter/src/filter'
import { propsType as tableProps } from '@/components/table/src/table'
import { propsType as pageProps } from '@/components/page/src/page'
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
    type: Object as PropType<Partial<typeof filterProps>>,
    default: () => ({})
  },
  filterEvents: {
    type: Object as PropType<VueEvents>,
    default: () => ({})
  },
  tableProps: {
    type: Object as PropType<Partial<typeof tableProps>>,
    default: () => ({})
  },
  tableEvents: {
    type: Object as PropType<VueEvents>,
    default: () => ({})
  },
  pageProps: {
    type: Object as PropType<Partial<typeof pageProps>>,
    default: () => ({})
  },
  pageEvents: {
    type: Object as PropType<VueEvents>,
    default: () => ({})
  },
}

export interface ExoprtFns {
  refresh: Function
  resetFilter: Function
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
