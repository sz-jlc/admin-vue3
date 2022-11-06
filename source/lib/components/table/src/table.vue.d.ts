import { h } from 'vue';
import type { AnyObj } from '../../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: import("vue").PropType<import("./table").Column[]>;
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
        render(h: any, row: AnyObj): any;
    } | undefined;
    handledColumns: import("vue").ComputedRef<any[]>;
    exoprtFns: {
        clearSelection: () => void;
        getSelectionRows: () => void;
        toggleRowSelection: () => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: () => void;
        setCurrentRow: () => void;
        clearSort: () => void;
        clearFilter: () => void;
        doLayout: () => void;
        sort: () => void;
        scrollTo: () => void;
        setScrollTop: () => void;
        setScrollLeft: () => void;
    };
    h: typeof h;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: import("vue").PropType<import("./table").Column[]>;
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
    columns: import("./table").Column[];
    loading: boolean;
    error: boolean;
}>;
export default _sfc_main;
