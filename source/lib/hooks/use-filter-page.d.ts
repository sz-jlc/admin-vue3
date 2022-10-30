import type { Ref } from 'vue';
import type { Data } from '../types';
interface Params {
    props: {
        isPage?: boolean;
        getData?: Function;
        initGet?: boolean;
    };
    emit: any;
    params: Ref;
}
declare const useFilterPage: ({ props, emit, params }: Params) => {
    filterRef: Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            filters: import("../components/filter/src/filter").FilterItem[];
            columnCount: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            filters: {
                type: import("vue").PropType<import("../components/filter/src/filter").FilterItem[]>;
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
                type: import("vue").PropType<import("../components/filter/src/filter").FilterItem[]>;
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
            formRef: Ref<any>;
            bindForm: import('../types').AnyObj;
            filterParams: import('../types').AnyObj;
            handleDefaultValue: (filterItem: import("../components/filter/src/filter").FilterItem) => {
                component: string;
                attrs: {
                    clearable: boolean;
                };
                events: {};
                flatTransform: boolean;
                enterQuery: boolean;
            } & import("../components/filter/src/filter").FilterItem;
            handleRangeTime: (filterItem: import("../components/filter/src/filter").FilterItem) => import("../components/filter/src/filter").FilterItem | {
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
            } & import("../components/filter/src/filter").FilterItem)[]>;
            filtersMap: {
                [key: string]: import("../components/filter/src/filter").FilterItem;
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
            onEnter: (filterItem: import("../components/filter/src/filter").FilterItem) => void;
            filterItemStyle: import("vue").ComputedRef<{
                width: string;
                minWidth: string;
            }>;
            init: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            filters: import("../components/filter/src/filter").FilterItem[];
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
            type: import("vue").PropType<import("../components/filter/src/filter").FilterItem[]>;
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
        formRef: Ref<any>;
        bindForm: import('../types').AnyObj;
        filterParams: import('../types').AnyObj;
        handleDefaultValue: (filterItem: import("../components/filter/src/filter").FilterItem) => {
            component: string;
            attrs: {
                clearable: boolean;
            };
            events: {};
            flatTransform: boolean;
            enterQuery: boolean;
        } & import("../components/filter/src/filter").FilterItem;
        handleRangeTime: (filterItem: import("../components/filter/src/filter").FilterItem) => import("../components/filter/src/filter").FilterItem | {
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
        } & import("../components/filter/src/filter").FilterItem)[]>;
        filtersMap: {
            [key: string]: import("../components/filter/src/filter").FilterItem;
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
        onEnter: (filterItem: import("../components/filter/src/filter").FilterItem) => void;
        filterItemStyle: import("vue").ComputedRef<{
            width: string;
            minWidth: string;
        }>;
        init: () => void;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    pageRef: Ref<({
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
            pageInfo: import("../components/page/src/page").PageInfo;
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
        pageInfo: import("../components/page/src/page").PageInfo;
        onCurrentChange: (current: number) => void;
        onSizeChange: (size: number) => void;
        query: (queryNow?: boolean) => void;
        reset: (queryNow?: boolean, resetSize?: boolean) => void;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    total: Ref<number>;
    data: Ref<unknown[]>;
    loading: Ref<boolean>;
    error: Ref<boolean>;
    onFilterQuery: (params: any, queryNow: boolean) => void;
    onFilterReset: (params: any, queryNow: boolean) => void;
    onPageQuery: (params: any, queryNow: boolean) => void;
    refresh: (needResetPage?: boolean) => void;
    resetFilter: (queryNow?: boolean) => void;
    resetPage: (queryNow?: boolean) => void;
    query: () => void;
    handleQuery: (promise: Promise<Data>) => void;
    handleQueryData: (queryData: Data) => void;
};
export default useFilterPage;
