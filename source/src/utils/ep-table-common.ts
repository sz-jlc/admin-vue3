import type { ElTable } from 'element-plus'

type ElTableType = InstanceType<typeof ElTable>

// 一些常用的element-plus表格的方法
export interface EpTableCommonFns {
  clearSelection: ElTableType['clearSelection']
  getSelectionRows: ElTableType['getSelectionRows']
  toggleRowSelection: ElTableType['toggleRowSelection']
  toggleAllSelection: ElTableType['toggleAllSelection']
  toggleRowExpansion: ElTableType['toggleRowExpansion']
  setCurrentRow: ElTableType['setCurrentRow']
}
export const getEpTableCommonFns = (target: EpTableCommonFns) => {
  return {
    clearSelection: target.clearSelection,
    getSelectionRows: target.getSelectionRows,
    toggleRowSelection: target.toggleRowSelection,
    toggleAllSelection: target.toggleAllSelection,
    toggleRowExpansion: target.toggleRowExpansion,
    setCurrentRow: target.setCurrentRow,
  }
}

// 一些常用的element-plus表格的事件
export interface EpTableCommonEvents {
  (e: 'select'): void
  (e: 'select-all'): void
  (e: 'selection-change'): void
  (e: 'row-click'): void
  (e: 'row-dblclick'): void
  (e: 'sort-change'): void
  (e: 'current-change'): void
}

export const epTableCommonEventNames = [
  'select',
  'select-all',
  'selection-change',
  'row-click',
  'row-dblclick',
  'sort-change',
  'current-change'
]
