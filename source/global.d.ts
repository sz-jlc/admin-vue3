// GlobalComponents for Volar

import JlcLayoutFilterPageList from './es/layouts/filter-page-list';
import JlcFilter from './es/components/filter';
import JlcTable from './es/components/table';
import JlcPage from './es/components/page';
import JlcProTable from './es/components/pro-table';
import JlcTreeTransfer from './es/components/tree-transfer';
import JlcConfigProvider from './es/components/config-provider';

export type SFCWithInstall<T> = T & Plugin

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JlcLayoutFilterPageList: typeof JlcLayoutFilterPageList,
    JlcFilter: typeof JlcFilter, 
    JlcTable: typeof JlcTable, 
    JlcPage: typeof JlcPage, 
    JlcProTable: typeof JlcProTable,
    JlcTreeTransfer: typeof JlcTreeTransfer,
    JlcConfigProvider: typeof JlcConfigProvider
  }
}

export {}
