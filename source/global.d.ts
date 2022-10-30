// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JlcLayoutFilterPageList: typeof import('@sz-jlc/admin-vue3')['JlcLayoutFilterPageList'], 
    JlcFilter: typeof import('@sz-jlc/admin-vue3')['JlcFilter'], 
    JlcTable: typeof import('@sz-jlc/admin-vue3')['JlcTable'], 
    JlcPage: typeof import('@sz-jlc/admin-vue3')['JlcPage'], 
    JlcProTable: typeof import('@sz-jlc/admin-vue3')['JlcProTable']
  }
}

export {}
