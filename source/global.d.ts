// GlobalComponents for Volar
export type SFCWithInstall<T> = T & Plugin

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JlcFilter: typeof import('@sz-jlc/admin-vue3')['JlcFilter'], 
    JlcTable: typeof import('@sz-jlc/admin-vue3')['JlcTable'], 
    JlcPage: typeof import('@sz-jlc/admin-vue3')['JlcPage'], 
    JlcProTable: typeof import('@sz-jlc/admin-vue3')['JlcProTable']
    JlcConfigProvider: typeof import('@sz-jlc/admin-vue3')['JlcConfigProvider']
  }
}

export {}
