<template>
  <el-table ref="tableRef" v-bind="$attrs" stripe border v-loading="loading">
    <el-table-column v-for="(item, index) in handledColumns" :key="index" v-bind="item">
      <template #default="{ row, column, $index }">
        <slot v-if="item.slot" :name="item.slot" :row="row" :column="column" :index="$index"></slot>
        <component :is="item.render(h, row, column, $index)" v-else-if="item.render" />
      </template>
      <template #header v-if="item.header">
        <component :is="item.header!(h)" />
      </template>
    </el-table-column>
    <template #empty>
      <div v-show="!loading">
        <div class="table__state" v-if="!error">
          <div>无数据</div>
        </div>
        <div class="table__state" v-else>
          <div>网络错误</div>
        </div>
      </div>
    </template>
  </el-table>
</template>

<script setup lang="ts" name="jlc-table">
  import { h } from 'vue'
  import { ElButton } from 'element-plus'
  import { isEmpty } from '@/utils/tools'
  import { getEpTableCommonFns } from '@/utils/ep-table-common'
  import { propsType, emitsType } from './table'
  import type { ExoprtFns } from './table'
  import type { VNode } from 'vue'
  import type { AnyObj } from '@/types'

  const props = defineProps(propsType)
  const emit = defineEmits(emitsType)

  const tableRef = ref()

  // 预设type的表格列配置
  const typeConfigMap = {
    date: {
      width: 120,
      align: 'center',
    },
    time: {
      width: 140,
      align: 'center',
    },
    phone: {
      width: 120,
      align: 'center',
    },
  }

  const handleEditAndDelete = () => {
    // 添加对应的编辑和删除列
    interface Render {
      (row: any): VNode
    }
    const operateColumn: Render[] = []
    if (props.update) {
      operateColumn.push((row) =>
        h(
          ElButton,
          {
            link: true,
            type: 'primary',
            onClick() {
              emit('update', row)
            },
          },
          () => '编辑'
        )
      )
    }
    if (props.delete) {
      operateColumn.push((row) =>
        h(
          ElButton,
          {
            link: true,
            type: 'danger',
            onClick() {
              emit('delete', row)
            },
          },
          () => '删除'
        )
      )
    }
    if (operateColumn.length) {
      const width = operateColumn.length * 40 + 40
      return {
        width,
        align: 'center',
        label: '操作',
        fixed: 'right',
        render(h: any, row: AnyObj) {
          return h(
            'div',
            operateColumn.map((render) => render(row))
          )
        },
      }
    }
  }

  // 处理columns，生成element-table需要的
  const handledColumns = computed(() => {
    const result: any[] = props.columns.map((item) => {
      const { type } = item
      return {
        ...item,
        // 根据type预设一些配置
        ...(type! in typeConfigMap ? typeConfigMap[type as keyof typeof typeConfigMap] : {}),
        align: item.align || 'center',
        resizable: isEmpty(item.resizable) ? true : item.resizable,
        // 默认最小宽度，保证标题不会换行
        minWidth: isEmpty(item.minWidth) ? (item.label ? item.label!.length * 15 + 24 : 20) : item.minWidth,
      }
    })
    const operateColumn = handleEditAndDelete()
    if (operateColumn) {
      result.push(operateColumn)
    }
    return result
  })
  
  const exoprtFns: ExoprtFns = {
    epTable: tableRef,
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

<style lang="scss" scoped>
@import './table.scss';
</style>
