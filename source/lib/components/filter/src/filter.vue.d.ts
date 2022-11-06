import type { AnyObj } from '../../../types';
import type { FilterItem } from './filter';
declare const _sfc_main: import("vue").DefineComponent<{
    filters: {
        type: import("vue").PropType<FilterItem[]>;
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
    bindForm: AnyObj;
    filterParams: AnyObj;
    defaultPlaceholder: any;
    handleDefaultValue: (filterItem: FilterItem) => any;
    handleRangeTime: (filterItem: FilterItem) => FilterItem | {
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
    } & FilterItem)[]>;
    filtersMap: {
        [key: string]: FilterItem;
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
    onEnter: (filterItem: FilterItem) => void;
    filterItemStyle: import("vue").ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    init: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filters: {
        type: import("vue").PropType<FilterItem[]>;
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
    filters: FilterItem[];
    columnCount: number;
}>;
export default _sfc_main;
