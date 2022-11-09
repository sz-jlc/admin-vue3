import type { PropType } from 'vue';
export declare const propsType: {
    data: {
        type: PropType<any[]>;
        default: never[];
    };
    targetIds: {
        type: PropType<any[]>;
        default: never[];
    };
    props: {
        type: PropType<Partial<{
            id: string;
            parentId: string;
            label: string;
        } & import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>>;
        default: () => {};
    };
    sourceTitle: {
        type: StringConstructor;
        default: string;
    };
    targetTitle: {
        type: StringConstructor;
        default: string;
    };
};
export declare const emitsType: never[];
