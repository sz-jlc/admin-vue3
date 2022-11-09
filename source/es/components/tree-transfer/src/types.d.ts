import type { ElTree } from 'element-plus';
declare type ElTreeType = InstanceType<typeof ElTree>;
declare type ElTreeProps = ElTreeType['$props']['props'];
export declare type Props = Partial<{
    id: string;
    parentId: string;
    label: string;
} & ElTreeProps>;
export {};
