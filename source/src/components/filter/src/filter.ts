// import { formProps, formEmits } from 'element-plus/es/components/form/src/form'
import type { VNode, PropType } from 'vue'
import type { FnObj } from '@/types'

export interface FilterItem {
  component?: string
  key: string | string[]
  value?: any
  label?: string
  type?: string
  attrs?: object
  events?: FnObj
  slot?: string
  trim?: boolean
  transform?: (value: any) => any
  flatTransform?: boolean
  enterQuery?: boolean
  clearable?: boolean
  children?: {
    component: string
    content?: string
    render?: (bindForm?: object) => VNode
    attrs?: object
    events?: FnObj
  }[]
}

export const propsType = {
  filters: {
    type: Array as PropType<FilterItem[]>,
    default: () => [],
    required: true,
  },
  columnCount: {
    type: Number,
    default: 5
  },
  // ...formProps
}

export const emitsType = [
  'query', 
  'reset', 
  // ...Object.keys(formEmits)
]
