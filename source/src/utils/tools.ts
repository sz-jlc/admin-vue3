import type { AnyObj } from '@/types'

/**
 * @description 函数组合
 * @param {array} fns 函数列表
 * @return {Function} 执行函数
 */
export const compose = (...fns: Function[]) => {
  return fns.reduce(
    (a, b) =>
      (...args: any[]) =>
        a(b(...args))
  )
}

/**
 * @description 是否为空
 * @param {any} value
 * @return {boolean}
 */
export const isEmpty = (value: any) => {
  return value === "" || value === null || value === undefined
}

/**
 * @description 数组转树形
 * @param {array} list 目标数组
 * @param {ToTreeConfig} config 配置
 * @return {array} 树形数组
 */
interface ToTreeConfig {
  id?: string
  parentId?: string
  children?: string
}
export const toTree = (list: any[], config?: ToTreeConfig) => {
  const {
    id = "id",
    parentId = "parentId",
    children = "children",
  } = config || {}
  return list.filter((item1) => {
    item1[children] = list.filter((item2) => item1[id] === item2[parentId])
    return isEmpty(item1[parentId])
  })
}

/**
 * @description 树形数组拉平
 * @param {array} tree 目标树形数据
 * @param {FlatTreeConfig} config 配置
 * @return {array} 拉平后的数组
 */
interface FlatTreeConfig {
  children?: string
}
export const flatTree = (tree: any[], config?: FlatTreeConfig) => {
  const { children = "children" } = config || {}
  const result: any[] = []
  function _flat(tree: any[]) {
    for (const item of tree) {
      result.push(item)
      if (item[children]) {
        _flat(item[children])
      }
    }
  }
  _flat(tree)
  return result
}

/**
 * @description 将对象数组根据指定字段转换为对象映射
 * @param {array} arr 源对象数组
 * @param {string} key 指定字段
 * @return {object} 映射对象
 */
export const convertArrayMap = (arr: AnyObj[], key: string) => {
  return arr.reduce((res, cur) => {
    res[cur[key]] = cur
    return res
  }, {})
}

/**
 * @description 将对象数组根据指定字段转换为值对象映射
 * @param {array} arr 源对象数组
 * @param {string} key 指定字段
 * @param {string} valueKey 指定值的字段
 * @return {object} 映射对象
 */
export const covertArrayValueMap = (
  arr: AnyObj[],
  key: string,
  valueKey: string
) => {
  return arr.reduce((res, cur) => {
    res[cur[key]] = cur[valueKey]
    return res
  }, {})
}

/**
 * @description 数组字段映射，将对象数组根据指定指定映射为数组
 * @param {array} arr 源对象数组
 * @param {string} field 指定字段
 * @return {object} 映射对象
 */
export const arrFieldMap = (arr: AnyObj[], field: string) => {
  return arr.reduce((res, cur) => {
    res[cur[field]] = cur
    return res
  }, {})
}
