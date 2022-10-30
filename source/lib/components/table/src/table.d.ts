import type { PropType, Ref } from 'vue';
import type { VNode } from 'vue';
import type { AnyObj } from '../../../types';
import type { ElTableColumn } from 'element-plus';
import type { EpTableCommonFns } from '../../../utils/ep-table-common';
declare type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
export interface Column extends ElTableColumnProps {
    type?: string;
    header?: (h: any) => VNode;
    render?: (h: any, row: AnyObj, column: AnyObj, $index: number) => VNode;
    slot?: string;
}
export declare const propsType: {
    columns: {
        type: PropType<Column[]>;
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
};
export interface ExoprtFns extends EpTableCommonFns {
    epTable: Ref;
}
export declare const emitsType: string[];
export {};
