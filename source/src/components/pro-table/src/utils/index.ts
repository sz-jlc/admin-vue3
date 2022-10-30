export const RESERVE_SLOTS = ['filter-bottom', 'list-bottom']

/**
 * @description 获取filter或table的json配置中的插槽
 * @param {array} target filter或table的json配置
 * @return {array} 插槽名数组
 */
 export const getOptionSlots = (target: any[]) => {
  const result = target
    .filter((item) => {
      if (item.slot) {
        if (RESERVE_SLOTS.includes(item.slot)) {
          throw new Error(`${item.slot}为组件内部预留插槽，请修改插槽名称`)
        }
        return true
      }
    })
    .map((item) => item.slot)
  return result as string[]
}
