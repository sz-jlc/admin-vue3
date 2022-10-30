import { EpTableCommonFns } from '../../../utils/ep-table-common';
import type { ExoprtFns } from './pro-table';
declare const _sfc_main: import("vue").DefineComponent<{
    filters: {
        type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
        default: () => never[];
        required: boolean;
    };
    columns: {
        type: import("vue").PropType<import("../../table/src/table").Column[]>;
        default: () => never[];
        required: boolean;
    };
    getData: {
        type: import("vue").PropType<(params?: any) => import("../../../types").Data | Promise<import("../../../types").Data>>;
        required: boolean;
    };
    initGet: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterProps: {
        type: import("vue").PropType<Partial<{
            filters: {
                type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
                default: () => never[];
                required: boolean;
            };
            columnCount: {
                type: NumberConstructor;
                default: number;
            };
        }>>;
        default: () => {};
    };
    filterEvents: {
        type: import("vue").PropType<import("./pro-table").VueEvents>;
        default: () => {};
    };
    tableProps: {
        type: import("vue").PropType<Partial<{
            columns: {
                type: import("vue").PropType<import("../../table/src/table").Column[]>;
                default: () => never[];
                required: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            update: {
                type: BooleanConstructor;
                default: boolean;
            };
            delete: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>;
        default: () => {};
    };
    tableEvents: {
        type: import("vue").PropType<import("./pro-table").VueEvents>;
        default: () => {};
    };
    pageProps: {
        type: import("vue").PropType<Partial<{
            total: {
                type: NumberConstructor;
                required: boolean;
            };
        }>>;
        default: () => {};
    };
    pageEvents: {
        type: import("vue").PropType<import("./pro-table").VueEvents>;
        default: () => {};
    };
}, {
    props: any;
    emit: (event: string, ...args: any[]) => void;
    createEvents: (eventName: string) => (...args: any[]) => void;
    withCommonTableEvents: import("vue").ComputedRef<any>;
    tableParams: import("vue").Ref<{}>;
    filterRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            filters: import("../../filter/src/filter").FilterItem[];
            columnCount: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            filters: {
                type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
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
                type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
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
            bindForm: import("../../../types").AnyObj;
            filterParams: import("../../../types").AnyObj;
            handleDefaultValue: (filterItem: import("../../filter/src/filter").FilterItem) => {
                component: string;
                attrs: {
                    clearable: boolean;
                };
                events: {};
                flatTransform: boolean;
                enterQuery: boolean;
            } & import("../../filter/src/filter").FilterItem;
            handleRangeTime: (filterItem: import("../../filter/src/filter").FilterItem) => import("../../filter/src/filter").FilterItem | {
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
            } & import("../../filter/src/filter").FilterItem)[]>;
            filtersMap: {
                [key: string]: import("../../filter/src/filter").FilterItem;
            };
            getTransformValues: () => {
                [key: string]: any;
            };
            syncFilterParams: () => {
                [key: string]: any;
            };
            handleInitValue: () => void;
            query: (queryNow?: boolean) => void;
            reset: (queryNow?: boolean) => void;
            onEnter: (filterItem: import("../../filter/src/filter").FilterItem) => void;
            filterItemStyle: import("vue").ComputedRef<{
                width: string;
                minWidth: string;
            }>;
            init: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            filters: import("../../filter/src/filter").FilterItem[];
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
            type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
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
        bindForm: import("../../../types").AnyObj;
        filterParams: import("../../../types").AnyObj;
        handleDefaultValue: (filterItem: import("../../filter/src/filter").FilterItem) => {
            component: string;
            attrs: {
                clearable: boolean;
            };
            events: {};
            flatTransform: boolean;
            enterQuery: boolean;
        } & import("../../filter/src/filter").FilterItem;
        handleRangeTime: (filterItem: import("../../filter/src/filter").FilterItem) => import("../../filter/src/filter").FilterItem | {
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
        } & import("../../filter/src/filter").FilterItem)[]>;
        filtersMap: {
            [key: string]: import("../../filter/src/filter").FilterItem;
        };
        getTransformValues: () => {
            [key: string]: any;
        };
        syncFilterParams: () => {
            [key: string]: any;
        };
        handleInitValue: () => void;
        query: (queryNow?: boolean) => void;
        reset: (queryNow?: boolean) => void;
        onEnter: (filterItem: import("../../filter/src/filter").FilterItem) => void;
        filterItemStyle: import("vue").ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        init: () => void;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    pageRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{
            total: {
                type: NumberConstructor;
                required: boolean;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
            total: {
                type: NumberConstructor;
                required: boolean;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }, {
            props: any;
            emit: (event: string, ...args: any[]) => void;
            DEFAULT_CURRENT_PAGE: number;
            attrs: {
                [x: string]: unknown;
            };
            initPageInfo: {
                pageNum: number;
                pageSize: number;
            };
            pageInfo: import("../../page/src/page").PageInfo;
            onCurrentChange: (current: number) => void;
            onSizeChange: (size: number) => void;
            query: (queryNow?: boolean) => void;
            reset: (queryNow?: boolean, resetSize?: boolean) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {}> & {
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
        total: {
            type: NumberConstructor;
            required: boolean;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        props: any;
        emit: (event: string, ...args: any[]) => void;
        DEFAULT_CURRENT_PAGE: number;
        attrs: {
            [x: string]: unknown;
        };
        initPageInfo: {
            pageNum: number;
            pageSize: number;
        };
        pageInfo: import("../../page/src/page").PageInfo;
        onCurrentChange: (current: number) => void;
        onSizeChange: (size: number) => void;
        query: (queryNow?: boolean) => void;
        reset: (queryNow?: boolean, resetSize?: boolean) => void;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    total: import("vue").Ref<number>;
    data: import("vue").Ref<unknown[]>;
    loading: import("vue").Ref<boolean>;
    error: import("vue").Ref<boolean>;
    query: () => void;
    refresh: (needResetPage?: boolean) => void;
    resetFilter: (queryNow?: boolean) => void;
    resetPage: (queryNow?: boolean) => void;
    onFilterQuery: (params: any, queryNow: boolean) => void;
    onFilterReset: (params: any, queryNow: boolean) => void;
    onPageQuery: (params: any, queryNow: boolean) => void;
    tableRef: import("vue").Ref<any>;
    onTableQuery: (params: any, queryNow: boolean) => void;
    filterSlots: import("vue").ComputedRef<string[]>;
    tableSlots: import("vue").ComputedRef<string[]>;
    exoprtFns: ExoprtFns & EpTableCommonFns;
    Layout: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    JlcFilter: import("vue").DefineComponent<{
        filters: {
            type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
            default: () => never[];
            required: boolean;
        };
        columnCount: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        props: any;
        emit: (event: string, ...args: any[]) => void;
        formRef: import("vue").Ref<any>;
        bindForm: import("../../../types").AnyObj;
        filterParams: import("../../../types").AnyObj;
        handleDefaultValue: (filterItem: import("../../filter/src/filter").FilterItem) => {
            component: string;
            attrs: {
                clearable: boolean;
            };
            events: {};
            flatTransform: boolean;
            enterQuery: boolean;
        } & import("../../filter/src/filter").FilterItem;
        handleRangeTime: (filterItem: import("../../filter/src/filter").FilterItem) => import("../../filter/src/filter").FilterItem | {
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
        } & import("../../filter/src/filter").FilterItem)[]>;
        filtersMap: {
            [key: string]: import("../../filter/src/filter").FilterItem;
        };
        getTransformValues: () => {
            [key: string]: any;
        };
        syncFilterParams: () => {
            [key: string]: any;
        };
        handleInitValue: () => void;
        query: (queryNow?: boolean) => void;
        reset: (queryNow?: boolean) => void;
        onEnter: (filterItem: import("../../filter/src/filter").FilterItem) => void;
        filterItemStyle: import("vue").ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        init: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        filters: {
            type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
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
        filters: import("../../filter/src/filter").FilterItem[];
        columnCount: number;
    }>;
    JlcTable: import("vue").DefineComponent<{
        columns: {
            type: import("vue").PropType<import("../../table/src/table").Column[]>;
            default: () => never[];
            required: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        update: {
            type: BooleanConstructor;
            default: boolean;
        };
        delete: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: any;
        emit: (event: string, ...args: any[]) => void;
        tableRef: import("vue").Ref<any>;
        typeConfigMap: {
            date: {
                width: number;
                align: string;
            };
            time: {
                width: number;
                align: string;
            };
            phone: {
                width: number;
                align: string;
            };
        };
        handleEditAndDelete: () => {
            width: number;
            align: string;
            label: string;
            fixed: string;
            render(h: any, row: import("../../../types").AnyObj): any;
        } | undefined;
        handledColumns: import("vue").ComputedRef<any[]>;
        exoprtFns: import("../../table/src/table").ExoprtFns;
        h: typeof import("vue").h;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: import("vue").PropType<import("../../table/src/table").Column[]>;
            default: () => never[];
            required: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        update: {
            type: BooleanConstructor;
            default: boolean;
        };
        delete: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {
        update: boolean;
        delete: boolean;
        columns: import("../../table/src/table").Column[];
        loading: boolean;
        error: boolean;
    }>;
    JlcPage: import("vue").DefineComponent<{
        total: {
            type: NumberConstructor;
            required: boolean;
        };
    }, {
        props: any;
        emit: (event: string, ...args: any[]) => void;
        DEFAULT_CURRENT_PAGE: number;
        attrs: {
            [x: string]: unknown;
        };
        initPageInfo: {
            pageNum: number;
            pageSize: number;
        };
        pageInfo: import("../../page/src/page").PageInfo;
        onCurrentChange: (current: number) => void;
        onSizeChange: (size: number) => void;
        query: (queryNow?: boolean) => void;
        reset: (queryNow?: boolean, resetSize?: boolean) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        total: {
            type: NumberConstructor;
            required: boolean;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filters: {
        type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
        default: () => never[];
        required: boolean;
    };
    columns: {
        type: import("vue").PropType<import("../../table/src/table").Column[]>;
        default: () => never[];
        required: boolean;
    };
    getData: {
        type: import("vue").PropType<(params?: any) => import("../../../types").Data | Promise<import("../../../types").Data>>;
        required: boolean;
    };
    initGet: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterProps: {
        type: import("vue").PropType<Partial<{
            filters: {
                type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
                default: () => never[];
                required: boolean;
            };
            columnCount: {
                type: NumberConstructor;
                default: number;
            };
        }>>;
        default: () => {};
    };
    filterEvents: {
        type: import("vue").PropType<import("./pro-table").VueEvents>;
        default: () => {};
    };
    tableProps: {
        type: import("vue").PropType<Partial<{
            columns: {
                type: import("vue").PropType<import("../../table/src/table").Column[]>;
                default: () => never[];
                required: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            update: {
                type: BooleanConstructor;
                default: boolean;
            };
            delete: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>;
        default: () => {};
    };
    tableEvents: {
        type: import("vue").PropType<import("./pro-table").VueEvents>;
        default: () => {};
    };
    pageProps: {
        type: import("vue").PropType<Partial<{
            total: {
                type: NumberConstructor;
                required: boolean;
            };
        }>>;
        default: () => {};
    };
    pageEvents: {
        type: import("vue").PropType<import("./pro-table").VueEvents>;
        default: () => {};
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    filters: import("../../filter/src/filter").FilterItem[];
    columns: import("../../table/src/table").Column[];
    initGet: boolean;
    isPage: boolean;
    filterProps: Partial<{
        filters: {
            type: import("vue").PropType<import("../../filter/src/filter").FilterItem[]>;
            default: () => never[];
            required: boolean;
        };
        columnCount: {
            type: NumberConstructor;
            default: number;
        };
    }>;
    filterEvents: import("./pro-table").VueEvents;
    tableProps: Partial<{
        columns: {
            type: import("vue").PropType<import("../../table/src/table").Column[]>;
            default: () => never[];
            required: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        update: {
            type: BooleanConstructor;
            default: boolean;
        };
        delete: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>;
    tableEvents: import("./pro-table").VueEvents;
    pageProps: Partial<{
        total: {
            type: NumberConstructor;
            required: boolean;
        };
    }>;
    pageEvents: import("./pro-table").VueEvents;
}>;
export default _sfc_main;
