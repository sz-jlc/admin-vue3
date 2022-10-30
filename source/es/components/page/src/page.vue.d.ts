import type { PageInfo } from './page';
declare const _sfc_main: import("vue").DefineComponent<{
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
    pageInfo: PageInfo;
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
export default _sfc_main;
