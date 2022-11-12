import type { InjectionKey } from 'vue';
import type { Data } from '../types';
export interface ConfigProviderContext {
    transformPageData: (data: any) => Data;
}
export declare const configProviderContextKey: InjectionKey<ConfigProviderContext>;
