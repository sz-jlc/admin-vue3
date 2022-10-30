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
  return value === '' || value === null || value === undefined
}
