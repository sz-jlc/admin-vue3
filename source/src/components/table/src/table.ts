// import tableProps from 'element-plus/es/components/table/src/table/defaults'
import type { PropType } from 'vue'
import type { VNode } from 'vue'
import type { AnyObj } from '@/types'
import type { ElTableColumn } from 'element-plus'
type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props']

export interface Column extends ElTableColumnProps {
  type?: string
  // type?: 'selection' | 'index' | 'expand' | 'date' | 'time' | 'phone'
  header?: (h: any) => VNode
  render?: (h: any, row: AnyObj, column: AnyObj, $index: number) => VNode
  slot?: string
}

export const propsType = {
  columns: {
    type: Array as PropType<Column[]>,
    default: () => [],
    required: true,
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  update: {
    type: Boolean,
    default: false
  },
  delete: {
    type: Boolean,
    default: false
  },
  // ...tableProps
}

export const emitsType = [
  'query', 
  'update', 
  'delete',
]
