// import { paginationProps, paginationEmits } from 'element-plus/es/components/pagination/src/pagination'

export interface PageInfo {
  pageNum: number
  pageSize: number
}

export const propsType = {
  // ...paginationProps,
  total: {
    type: Number,
    required: true,
  }
}

export const emitsType = [
  'query', 
  // ...Object.keys(paginationEmits)
]
