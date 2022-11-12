declare const _default: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            filters: import("./src/filter").FilterItem[];
            columnCount: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            filters: {
                type: import("vue").PropType<import("./src/filter").FilterItem[]>;
                default: () => never[];
                required: boolean;
            };
            columnCount: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "filters" | "columnCount">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            filters: {
                type: import("vue").PropType<import("./src/filter").FilterItem[]>;
                default: () => never[];
                required: boolean;
            };
            columnCount: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            props: any;
            emit: (event: string, ...args: any[]) => void;
            formRef: import("vue").Ref<any>;
            bindForm: import("../../types").AnyObj;
            filterParams: import("../../types").AnyObj;
            defaultPlaceholder: any;
            handleDefaultValue: (filterItem: import("./src/filter").FilterItem) => any;
            handleRangeTime: (filterItem: import("./src/filter").FilterItem) => import("./src/filter").FilterItem | {
                label: string | undefined;
                transform: ((value: any) => any) | undefined;
                component: string;
                key: string;
                value: any;
                attrs: {
                    placeholder: string;
                    type: string;
                    disabledDate(date: Date): boolean;
                };
            }[];
            handledFilters: import("vue").ComputedRef<({
                key: string;
            } & import("./src/filter").FilterItem)[]>;
            filtersMap: {
                [key: string]: import("./src/filter").FilterItem;
            };
            getTransformValues: () => {
                [key: string]: any;
            };
            syncFilterParams: () => {
                [key: string]: any;
            };
            handleInitValue: () => void;
            query: (queryNow?: boolean) => {
                [key: string]: any;
            };
            setFilter: (filter: object, queryNow?: boolean) => {
                [key: string]: any;
            };
            reset: (queryNow?: boolean) => void;
            onEnter: (filterItem: import("./src/filter").FilterItem) => void;
            filterItemStyle: import("vue").ComputedRef<{
                width: string;
                minWidth: string;
            }>;
            init: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            filters: import("./src/filter").FilterItem[];
            columnCount: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        filters: {
            type: import("vue").PropType<import("./src/filter").FilterItem[]>;
            default: () => never[];
            required: boolean;
        };
        columnCount: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        props: any;
        emit: (event: string, ...args: any[]) => void;
        formRef: import("vue").Ref<any>;
        bindForm: import("../../types").AnyObj;
        filterParams: import("../../types").AnyObj;
        defaultPlaceholder: any;
        handleDefaultValue: (filterItem: import("./src/filter").FilterItem) => any;
        handleRangeTime: (filterItem: import("./src/filter").FilterItem) => import("./src/filter").FilterItem | {
            label: string | undefined;
            transform: ((value: any) => any) | undefined;
            component: string;
            key: string;
            value: any;
            attrs: {
                placeholder: string;
                type: string;
                disabledDate(date: Date): boolean;
            };
        }[];
        handledFilters: import("vue").ComputedRef<({
            key: string;
        } & import("./src/filter").FilterItem)[]>;
        filtersMap: {
            [key: string]: import("./src/filter").FilterItem;
        };
        getTransformValues: () => {
            [key: string]: any;
        };
        syncFilterParams: () => {
            [key: string]: any;
        };
        handleInitValue: () => void;
        query: (queryNow?: boolean) => {
            [key: string]: any;
        };
        setFilter: (filter: object, queryNow?: boolean) => {
            [key: string]: any;
        };
        reset: (queryNow?: boolean) => void;
        onEnter: (filterItem: import("./src/filter").FilterItem) => void;
        filterItemStyle: import("vue").ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        init: () => void;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    filters: {
        type: import("vue").PropType<import("./src/filter").FilterItem[]>;
        default: () => never[];
        required: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    props: any;
    emit: (event: string, ...args: any[]) => void;
    formRef: import("vue").Ref<any>;
    bindForm: import("../../types").AnyObj;
    filterParams: import("../../types").AnyObj;
    defaultPlaceholder: any;
    handleDefaultValue: (filterItem: import("./src/filter").FilterItem) => any;
    handleRangeTime: (filterItem: import("./src/filter").FilterItem) => import("./src/filter").FilterItem | {
        label: string | undefined;
        transform: ((value: any) => any) | undefined;
        component: string;
        key: string;
        value: any;
        attrs: {
            placeholder: string;
            type: string;
            disabledDate(date: Date): boolean;
        };
    }[];
    handledFilters: import("vue").ComputedRef<({
        key: string;
    } & import("./src/filter").FilterItem)[]>;
    filtersMap: {
        [key: string]: import("./src/filter").FilterItem;
    };
    getTransformValues: () => {
        [key: string]: any;
    };
    syncFilterParams: () => {
        [key: string]: any;
    };
    handleInitValue: () => void;
    query: (queryNow?: boolean) => {
        [key: string]: any;
    };
    setFilter: (filter: object, queryNow?: boolean) => {
        [key: string]: any;
    };
    reset: (queryNow?: boolean) => void;
    onEnter: (filterItem: import("./src/filter").FilterItem) => void;
    filterItemStyle: import("vue").ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    init: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    filters: import("./src/filter").FilterItem[];
    columnCount: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin) & Record<string, any>;
export default _default;
