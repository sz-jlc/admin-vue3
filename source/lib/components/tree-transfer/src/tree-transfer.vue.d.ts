declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<any[]>;
        default: never[];
    };
    targetIds: {
        type: import("vue").PropType<any[]>;
        default: never[];
    };
    props: {
        type: import("vue").PropType<Partial<{
            id: string;
            parentId: string;
            label: string;
        } & import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>>;
        default: () => {};
    };
    sourceTitle: {
        type: StringConstructor;
        default: string;
    };
    targetTitle: {
        type: StringConstructor;
        default: string;
    };
}, {
    compProps: Readonly<import("_@vue_shared@3.2.41@@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: never[];
        };
        targetIds: {
            type: import("vue").PropType<any[]>;
            default: never[];
        };
        props: {
            type: import("vue").PropType<Partial<{
                id: string;
                parentId: string;
                label: string;
            } & import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>>;
            default: () => {};
        };
        sourceTitle: {
            type: StringConstructor;
            default: string;
        };
        targetTitle: {
            type: StringConstructor;
            default: string;
        };
    }>> & {}>>;
    props: any;
    hanledData: import("vue").ComputedRef<any[]>;
    sourceTreeRef: import("vue").Ref<any>;
    targetTreeRef: import("vue").Ref<any>;
    getFlatList: () => any[];
    flatList: import("vue").Ref<any[]>;
    setTargetTree: () => void;
    toggle: (tree: any, type: number) => void;
    toTarget: () => void;
    toSource: () => void;
    getSourceNodes: () => any;
    getTargetNodes: () => any;
    getCommonNodes: () => any[];
    Tree: import("vue").DefineComponent<{
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
            props: Partial<{
                id: string;
                parentId: string;
                label: string;
            } & import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
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
    SOURCE_TYPE: number;
    TARGET_TYPE: number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any[]>;
        default: never[];
    };
    targetIds: {
        type: import("vue").PropType<any[]>;
        default: never[];
    };
    props: {
        type: import("vue").PropType<Partial<{
            id: string;
            parentId: string;
            label: string;
        } & import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>>;
        default: () => {};
    };
    sourceTitle: {
        type: StringConstructor;
        default: string;
    };
    targetTitle: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    props: Partial<{
        id: string;
        parentId: string;
        label: string;
    } & import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
    data: any[];
    targetIds: any[];
    sourceTitle: string;
    targetTitle: string;
}>;
export default _sfc_main;
