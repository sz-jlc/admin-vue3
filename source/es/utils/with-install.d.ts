import type { Plugin } from 'vue';
declare type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
export default withInstall;
