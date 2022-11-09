import type { AnyObj } from '../types';
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
/**
 * @description 数组转树形
 * @param {array} list 目标数组
 * @param {ToTreeConfig} config 配置
 * @return {array} 树形数组
 */
interface ToTreeConfig {
    id?: string;
    parentId?: string;
    children?: string;
}
export declare const toTree: (list: any[], config?: ToTreeConfig) => any[];
/**
 * @description 树形数组拉平
 * @param {array} tree 目标树形数据
 * @param {FlatTreeConfig} config 配置
 * @return {array} 拉平后的数组
 */
interface FlatTreeConfig {
    children?: string;
}
export declare const flatTree: (tree: any[], config?: FlatTreeConfig) => any[];
/**
 * @description 将对象数组根据指定字段转换为对象映射
 * @param {array} arr 源对象数组
 * @param {string} key 指定字段
 * @return {object} 映射对象
 */
export declare const convertArrayMap: (arr: AnyObj[], key: string) => AnyObj;
/**
 * @description 将对象数组根据指定字段转换为值对象映射
 * @param {array} arr 源对象数组
 * @param {string} key 指定字段
 * @param {string} valueKey 指定值的字段
 * @return {object} 映射对象
 */
export declare const covertArrayValueMap: (arr: AnyObj[], key: string, valueKey: string) => AnyObj;
/**
 * @description 数组字段映射，将对象数组根据指定指定映射为数组
 * @param {array} arr 源对象数组
 * @param {string} field 指定字段
 * @return {object} 映射对象
 */
export declare const arrFieldMap: (arr: AnyObj[], field: string) => AnyObj;
export {};
