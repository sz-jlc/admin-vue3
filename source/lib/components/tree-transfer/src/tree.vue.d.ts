import type { Props } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    props: {
        type: null;
        required: false;
        default: () => {};
    };
    type: {
        type: NumberConstructor;
        required: true;
    };
    list: {
        type: ArrayConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
}, {
    compProps: {
        props: Props;
        type: number;
        list: any[];
        title: string;
    };
    treeRef: import("vue").Ref<any>;
    labelKey: import("vue").ComputedRef<string>;
    treeData: import("vue").ComputedRef<any[]>;
    listIdMap: import("vue").ComputedRef<import("../../../types").AnyObj>;
    ids: import("vue").ComputedRef<string[]>;
    getNodes: () => any[];
    filterKey: import("vue").Ref<string>;
    findParents: (data: any) => any[];
    filterNode: (value: string, data: any) => boolean;
    checkedAll: import("vue").Ref<boolean>;
    indeterminate: import("vue").Ref<boolean>;
    onChangeCheckAll: (value: any) => void;
    updateCheckAll: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: null;
        required: false;
        default: () => {};
    };
    type: {
        type: NumberConstructor;
        required: true;
    };
    list: {
        type: ArrayConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    props: any;
}>;
export default _sfc_main;
