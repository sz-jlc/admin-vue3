import type { PropType } from 'vue';
import type { Data } from '../../../types';
export interface VueEvents {
    [key: string]: (...args: any[]) => any;
}
export declare const propsType: {
    filters: {
        type: PropType<import('../../../components/filter/src/filter').FilterItem[]>;
        default: () => never[];
        required: boolean;
    };
    columns: {
        type: PropType<import('../../../components/table/src/table').Column[]>;
        default: () => never[];
        required: boolean;
    };
    getData: {
        type: PropType<(params?: any) => Promise<Data> | Data>;
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
        type: ObjectConstructor;
        default: () => {};
    };
    filterEvents: {
        type: ObjectConstructor;
        default: () => {};
    };
    tableProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    tableEvents: {
        type: ObjectConstructor;
        default: () => {};
    };
    pageProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    pageEvents: {
        type: ObjectConstructor;
        default: () => {};
    };
};
export interface ExoprtFns {
    query: Function;
    refresh: Function;
    setFilter: Function;
    resetFilter: Function;
    setPage: Function;
    resetPage: Function;
    filter: any;
    table: any;
    page: any;
}
export declare const emitsType: string[];
