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
        type: PropType<Partial<{
            filters: {
                type: PropType<import('../../../components/filter/src/filter').FilterItem[]>;
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
        type: PropType<VueEvents>;
        default: () => {};
    };
    tableProps: {
        type: PropType<Partial<{
            columns: {
                type: PropType<import('../../../components/table/src/table').Column[]>;
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
        type: PropType<VueEvents>;
        default: () => {};
    };
    pageProps: {
        type: PropType<Partial<{
            total: {
                type: NumberConstructor;
                required: boolean;
            };
        }>>;
        default: () => {};
    };
    pageEvents: {
        type: PropType<VueEvents>;
        default: () => {};
    };
};
export interface ExoprtFns {
    refresh: Function;
    resetFilter: Function;
    resetPage: Function;
    filter: any;
    table: any;
    page: any;
}
export declare const emitsType: string[];
