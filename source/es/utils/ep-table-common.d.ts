import type { ElTable } from 'element-plus';
declare type ElTableType = InstanceType<typeof ElTable>;
export interface EpTableCommonFns {
    clearSelection: ElTableType['clearSelection'];
    getSelectionRows: ElTableType['getSelectionRows'];
    toggleRowSelection: ElTableType['toggleRowSelection'];
    toggleAllSelection: ElTableType['toggleAllSelection'];
    toggleRowExpansion: ElTableType['toggleRowExpansion'];
    setCurrentRow: ElTableType['setCurrentRow'];
}
export declare const getEpTableCommonFns: (target: EpTableCommonFns) => {
    clearSelection: () => void;
    getSelectionRows: () => any;
    toggleRowSelection: (row: any, selected: boolean) => void;
    toggleAllSelection: () => void;
    toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
    setCurrentRow: (row: any) => void;
};
export interface EpTableCommonEvents {
    (e: 'select'): void;
    (e: 'select-all'): void;
    (e: 'selection-change'): void;
    (e: 'row-click'): void;
    (e: 'row-dblclick'): void;
    (e: 'sort-change'): void;
    (e: 'current-change'): void;
}
export declare const epTableCommonEventNames: string[];
export {};
