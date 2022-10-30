import type { VNode, PropType } from 'vue';
import type { FnObj } from '../../../types';
export interface FilterItem {
    component?: string;
    key: string | string[];
    value?: any;
    label?: string;
    type?: string;
    attrs?: object;
    events?: FnObj;
    slot?: string;
    trim?: boolean;
    transform?: (value: any) => any;
    flatTransform?: boolean;
    enterQuery?: boolean;
    clearable?: boolean;
    children?: {
        component: string;
        content?: string;
        render?: (bindForm?: object) => VNode;
        attrs?: object;
        events?: FnObj;
    }[];
}
export declare const propsType: {
    filters: {
        type: PropType<FilterItem[]>;
        default: () => never[];
        required: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const emitsType: string[];
