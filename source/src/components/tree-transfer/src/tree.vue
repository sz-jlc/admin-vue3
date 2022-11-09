<template>
  <div class="transfer-tree">
    <div class="transfer-tree__check-all">
      <el-checkbox
        v-model="checkedAll"
        :indeterminate="indeterminate"
        :label="title"
        @change="onChangeCheckAll"
      />
    </div>
    <div class="transfer-tree__search">
      <el-input placeholder="输入关键字搜索" v-model="filterKey" />
    </div>
    <div class="transfer-tree__main">
      <el-tree
        v-bind="$attrs"
        :data="treeData"
        default-expand-all
        :expand-on-click-node="true"
        :node-key="props.id"
        show-checkbox
        :check-on-click-node="true"
        :filter-node-method="filterNode"
        ref="treeRef"
        :props="props"
        @check="updateCheckAll"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { toTree } from '@/utils/tools'
  import cloneDeep from 'lodash/cloneDeep'
  import { convertArrayMap } from '@/utils/tools'
  import { COMMON_TYPE } from './constant'
  import type { Props } from './types'

  const compProps = withDefaults(
    defineProps<{
      props?: Props
      type: number
      list: any[]
      title: string
    }>(),
    {
      props: () => ({}),
    }
  )

  watch(
    () => compProps.list,
    async () => {
      await nextTick()
      updateCheckAll()
    },
    {
      deep: true,
    }
  )

  const treeRef = ref()
  const labelKey = computed(() => compProps.props.label || 'label')

  const treeData = computed(() => {
    const { type, list, props } = compProps
    const { id, parentId, children } = props
    return toTree(
      cloneDeep(
        list.filter((item) => {
          const { __type__ } = item
          return __type__ === type || __type__ == COMMON_TYPE
        })
      ),
      {
        id,
        parentId,
        children,
      }
    )
  })

  // 将list转换为id映射的对象，提升后续一些操作的性能
  const listIdMap = computed(() =>
    convertArrayMap(
      compProps.list.filter((item) => {
        const { __type__ } = item
        return __type__ === compProps.type || __type__ == COMMON_TYPE
      }),
      compProps.props.id || 'id'
    )
  )

  const ids = computed(() => Object.keys(listIdMap.value))

  const getNodes = () => {
    const { type, list } = compProps
    return list.filter((item) => item.__type__ === type || item.__type__ === COMMON_TYPE)
  }

  // 搜索相关
  const filterKey = ref('')
  watch(filterKey, (value) => {
    treeRef.value!.filter(value)
  })
  // 查找当前节点的上级节点
  const findParents = (data: any) => {
    const result = [data]
    for (let i = 0; i < result.length; i++) {
      const item = result[i]
      const parent = listIdMap.value[item.parentId]
      if (parent) {
        result.push(parent)
      }
    }
    result.shift()
    return result
  }
  const filterNode = (value: string, data: any) => {
    if (!value) return true
    const transformValue = value.toUpperCase()
    if (data[labelKey.value].toUpperCase().includes(transformValue)) {
      return true
    }
    // 如果上级节点匹配，则当前节点应展示
    const parents = findParents(data)
    if (parents.some((item) => item[labelKey.value].toUpperCase().includes(transformValue))) {
      return true
    }
    return false
  }

  // 全选相关
  const checkedAll = ref(false)
  const indeterminate = ref(false)
  const onChangeCheckAll = (value: any) => {
    treeRef.value.setCheckedKeys(value ? ids.value : [])
  }
  const updateCheckAll = () => {
    const checkedCount = treeRef.value.getCheckedNodes().length
    if (checkedCount === 0) {
      indeterminate.value = false
      checkedAll.value = false
      return
    }
    if (checkedCount === 0) {
      indeterminate.value = false
      checkedAll.value = false
    } else if (checkedCount === ids.value.length) {
      indeterminate.value = false
      checkedAll.value = true
    } else {
      checkedAll.value = false
      indeterminate.value = true
    }
  }

  defineExpose({
    tree: treeRef,
    getNodes,
  })
</script>

<style scoped lang="scss">
@import "./tree.scss";
</style>
