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
    filterRef: Ref<any>;
    pageRef: Ref<any>;
    total: Ref<number>;
    data: Ref<unknown[]>;
    loading: Ref<boolean>;
    error: Ref<boolean>;
    onFilterQuery: (params: any, queryNow: boolean) => void;
    onFilterReset: (params: any, queryNow: boolean) => void;
    onPageQuery: (params: any, queryNow: boolean) => void;
    query: () => void;
    refresh: (needResetPage?: boolean) => void;
    setFilter: (filter: object, queryNow?: boolean) => any;
    resetFilter: (queryNow?: boolean) => void;
    setPage: (pageInfo: object, queryNow?: boolean) => void;
    resetPage: (queryNow?: boolean, resetSize?: boolean) => void;
    queryData: () => void;
    handleQuery: (promise: Promise<Data>) => void;
    handleQueryData: (queryData: Data) => void;
};
export default useFilterPage;
