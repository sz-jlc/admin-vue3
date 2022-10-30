/**
 * @description 函数组合
 * @param {array} fns 函数列表
 * @return {Function} 执行函数
 */
export declare const compose: (...fns: Function[]) => Function;
/**
 * @description 是否为空
 * @param {any} value
 * @return {boolean}
 */
export declare const isEmpty: (value: any) => boolean;
