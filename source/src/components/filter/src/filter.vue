<template>
  <el-form ref="formRef" :model="bindForm" v-bind="$attrs" @submit.prevent class="filter__form">
    <el-form-item
      v-for="(item, index) in handledFilters"
      :prop="item.key"
      :label="item.label"
      :key="index"
      :style="filterItemStyle"
      class="filter__form__item"
    >
      <!-- 插槽 -->
      <slot v-if="item.slot" :name="item.slot" :bind-form="bindForm" />
      <component
        :is="item.component"
        v-else
        v-model="bindForm[item.key]"
        v-bind="(item.attrs || {} as any)"
        v-on="(item.events || {} as any)"
        class="w-full"
        @keydown.enter="onEnter(item)"
      >
        <!-- 子组件 -->
        <template v-if="item.children">
          <component
            :is="child.component"
            v-for="(child, index) in item.children"
            :key="index"
            v-bind="(child.attrs as any || {})"
            v-on="(child.events as any || {})"
          >
            <!-- 子组件内容render -->
            <component :is="child.render(bindForm)" v-if="child.render" />
            <!-- 子组件内容 -->
            <template v-else-if="child.content">{{ child.content }}</template>
          </component>
        </template>
        <!-- v-if不成立时，打包之后仍然会占据date-picker的默认插槽，以下临时处理方案 -->
        <template v-if="item.component === 'el-date-picker'" #default="{ text }: { text: string }">
          <div class="el-date-table-cell">
            <span class="el-date-table-cell__text">{{ text }}</span>
          </div>
        </template>
      </component>
    </el-form-item>
    <slot name="filter-ctrl" 
      :query="(queryNow = true) => query(queryNow)" 
      :reset="(queryNow = true) => reset(queryNow)"
    >
      <div class="filter__ctrl">
        <el-button type="primary" @click="query(true)">查询</el-button>
        <el-button type="info" @click="reset(true)">重置</el-button>
      </div>
    </slot>
  </el-form>
</template>

<script setup lang="ts" name="jlc-filter">
  import { compose, isEmpty } from '@/utils/tools'
  import merge from 'lodash/merge'
  import cloneDeep from 'lodash/cloneDeep'
  import { propsType, emitsType } from './filter'
  import type { AnyObj } from '@/types'
  import type { FilterItem } from './filter'

  const props = defineProps(propsType)

  const emit = defineEmits(emitsType)

  const formRef = ref()

  const bindForm: AnyObj = reactive({})
  const filterParams: AnyObj = {}

  const defaultPlaceholder: any = {
    'el-input': '请输入',
    'el-input-number': '请输入',
    'el-select': '请选择',
    'el-date-picker': '请选择',
    'el-time-picker': '请选择',
    'el-cascader': '请选择',
  }

  // 处理默认值
  const handleDefaultValue = (filterItem: FilterItem) => {
    const defaultMap = {
      component: 'el-input',
      attrs: {
        clearable: true,
      },
      events: {},
      flatTransform: true,
      enterQuery: true,
    }
    const result: any = merge({}, defaultMap, filterItem)
    if (result.component === 'el-input') {
      result.trim = isEmpty(result.trim) ? true : result.trim
    }
    // 添加默认placeholder
    result.attrs.placeholder = result.attrs.placeholder || defaultPlaceholder[result.component]
    return result
  }

  // 处理范围时间类型的filter项
  const handleRangeTime = (filterItem: FilterItem) => {
    const { label, key, type, value = [], transform } = filterItem
    if (type !== 'rangeTime') return filterItem
    if (!Array.isArray(key)) {
      throw new Error('[jlc-filter] 当type为rangeTime时，key必须传入一个数组：[key1, key2]')
    }
    const [startField, endField] = key
    const res = [
      {
        label,
        transform,
        component: 'el-date-picker',
        key: startField,
        value: value[0],
        attrs: {
          placeholder: '开始时间',
          type: 'datetime',
          disabledDate(date: Date) {
            return new Date(date).getTime() > new Date(bindForm[endField]).getTime()
          },
        },
      },
      {
        label: '至',
        transform,
        component: 'el-date-picker',
        key: endField,
        value: value[1],
        attrs: {
          placeholder: '结束时间',
          type: 'datetime',
          disabledDate(date: Date) {
            return new Date(date).getTime() < new Date(bindForm[startField]).getTime()
          },
        },
      },
    ]
    return res
  }

  // 处理后的FilterList
  const handledFilters = computed(() => {
    let result: ({ key: string } & FilterItem)[] = []
    props.filters.forEach((item) => {
      if (typeof item.key !== 'string' && !Array.isArray(item.key)) {
        throw new Error('[jlc-filter] 缺少属性或类型不正确：key')
      }
      // compose将handler集合串联执行，非常方便后续扩展和修改
      result = result.concat(compose(handleRangeTime, handleDefaultValue)(item))
    })
    return result
  })

  const filtersMap: { [key: string]: FilterItem } = {}

  // 获取绑定form转换后的值
  const getTransformValues = () => {
    const result: { [key: string]: any } = {}
    Object.keys(filtersMap).forEach((key) => {
      if (!filtersMap[key]) return
      // 深度克隆初始值，避免影响原值
      const value = cloneDeep(bindForm[key])
      const { transform, flatTransform, trim } = filtersMap[key]
      if (transform) {
        const transformVal = transform(value)
        // 将transform返回的对象拉平，赋值到result
        if (flatTransform && typeof transformVal === 'object') {
          Object.assign(result, transformVal)
        } else {
          result[key] = transformVal
        }
      } else if (trim && typeof value === 'string') {
        // 配置了trim且当前值类型为string，则执行trim
        result[key] = value.trim()
      } else {
        result[key] = value
      }
    })
    return result
  }

  // 同步到filterParams
  const syncFilterParams = () => {
    const transformValues = getTransformValues()
    Object.assign(filterParams, transformValues)
    return transformValues
  }

  // 初始化值
  const handleInitValue = () => {
    handledFilters.value.forEach((item) => {
      const { key, value } = item
      bindForm[key] = cloneDeep(value)
    })
  }

  // 查询
  const query = (queryNow = true) => {
    const transformValues = syncFilterParams()
    emit('query', transformValues, queryNow)
    return transformValues
  }

  // 设置筛选表单
  const setFilter = (filter: object, queryNow = true) => {
    Object.assign(bindForm, filter)
    return query(queryNow)
  }

  // 重置
  const reset = (queryNow = true) => {
    handleInitValue()
    const transformValues = syncFilterParams()
    emit('reset', transformValues, queryNow)
  }

  // 监听回车
  const onEnter = (filterItem: FilterItem) => {
    if (filterItem.enterQuery) {
      query()
    }
  }

  const filterItemStyle = computed(() => {
    const { columnCount } = props
    const percentage = 100 / columnCount
    return {
      width: `${percentage}%`,
      minWidth: `${percentage}%`,
    }
  })

  // 监听filterList，以同步查询值
  watch(
    handledFilters,
    (filters) => {
      const oldKeys = new Set(Object.keys(filtersMap))

      filters.forEach((item) => {
        oldKeys.delete(item.key as string)

        // 添加新增的filter
        if (!filtersMap[item.key as string]) {
          filtersMap[item.key as string] = item
          bindForm[item.key as string] = cloneDeep(item.value)
        }
      })

      // 移除掉不存在的filter
      oldKeys.forEach((key) => {
        delete filterParams[key]
        delete bindForm[key]
      })

      syncFilterParams()
    },
    {
      immediate: true,
    }
  )

  // 初始化
  const init = () => {
    syncFilterParams()
  }

  init()

  defineExpose({
    query,
    reset,
    setFilter,
    epForm: formRef,
  })
</script>

<style lang="scss" scoped>
@import './filter.scss';
</style>
