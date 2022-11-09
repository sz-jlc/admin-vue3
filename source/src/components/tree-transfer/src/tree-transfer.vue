<template>
  <div class="tree-transfer">
    <tree
      :list="flatList"
      :props="props"
      :type="SOURCE_TYPE"
      :title="sourceTitle"
      ref="sourceTreeRef"
    />
    <slot name="middle" :to-target="toTarget" :to-source="toSource">
      <div class="tree-transfer__ctrl">
        <el-button @click="toTarget">添加 &gt;</el-button>
        <el-button class="tree-transfer__remove" @click="toSource">&lt; 移除</el-button>
      </div>
    </slot>
    <tree
      :list="flatList"
      :props="props"
      :type="TARGET_TYPE"
      :title="targetTitle"
      ref="targetTreeRef"
    />
  </div>
</template>

<script setup lang="ts" name="jlc-tree-transfer">
  import cloneDeep from 'lodash/cloneDeep'
  import Tree from './tree.vue'
  import { flatTree } from '@/utils/tools'
  import { SOURCE_TYPE, TARGET_TYPE, COMMON_TYPE } from './constant'
  import { propsType } from './tree-transfer'

  const compProps = defineProps(propsType)

  const props = computed(() => {
    const { children = 'children', parentId = 'parentId', id = 'id' } = compProps.props
    return { ...compProps.props, children, parentId, id }
  })

  const hanledData = computed(() => {
    const { children, parentId, id } = props.value
    const data = cloneDeep(compProps.data)
    // 遍历树形，添加parentId
    function eachTree(tree: any[], parent?: any) {
      for (const item of tree) {
        if (parent) {
          if (item[parentId] === undefined) {
            item[parentId] = parent[id]
          }
        }
        if (item[children]) {
          eachTree(item[children], item)
        }
      }
    }
    eachTree(data)
    return data
  })

  const sourceTreeRef = ref()
  const targetTreeRef = ref()

  const getFlatList = () => {
    return flatTree(hanledData.value, { children: props.value.children }).map((item) => ({
      ...item,
      __type__: SOURCE_TYPE,
    }))
  }

  // 树形数据拉平后的列表
  const flatList = ref(getFlatList())

  watch(
    () => compProps.targetIds,
    () => {
      setTargetTree()
    }
  )

  watch(
    () => compProps.data,
    () => {
      flatList.value = getFlatList()
    }
  )

  onMounted(() => {
    // 初始选中target
    setTargetTree()
  })

  const setTargetTree = () => {
    const { parentId } = props.value
    // 排除掉有子集的父级，避免选中父级把所有子集都选中了
    const checkedIds = compProps.targetIds.filter(
      (id: string) => !flatList.value.some((item) => item[parentId] === id)
    )
    sourceTreeRef.value.tree.setCheckedKeys(checkedIds)
    nextTick(() => {
      toTarget()
    })
  }

  const toggle = (tree: any, type: number) => {
    const id = props.value.id

    const checkedNodes = new Set(tree.getCheckedNodes().map((item: any) => item[id]))
    const halfCheckedNodes = new Set(tree.getHalfCheckedNodes().map((item: any) => item[id]))

    for (const item of flatList.value) {
      if (checkedNodes.has(item[id])) {
        item.__type__ = type === SOURCE_TYPE ? TARGET_TYPE : SOURCE_TYPE
      } else if (halfCheckedNodes.has(item[id])) {
        item.__type__ = COMMON_TYPE
      }
    }
  }

  // sourceTree to targetTree
  const toTarget = () => {
    toggle(sourceTreeRef.value.tree, SOURCE_TYPE)
  }

  // targetTree to sourceTree
  const toSource = () => {
    toggle(targetTreeRef.value.tree, TARGET_TYPE)
  }

  // 获取源数据
  const getSourceNodes = () => sourceTreeRef.value.getNodes()

  // 获取目标数据
  const getTargetNodes = () => targetTreeRef.value.getNodes()

  // 获取公共数据
  const getCommonNodes = () => flatList.value.filter((item) => item.__type__ === COMMON_TYPE)

  defineExpose({
    getSourceNodes,
    getTargetNodes,
    getCommonNodes,
  })
</script>

<style scoped lang="scss">
@import "./tree-transfer.scss";
</style>