import type { PropType } from 'vue'
import type { ConfigProviderContext } from '@/utils/global-config'

export const propsType = {
  transformPageData: Function as PropType<ConfigProviderContext['transformPageData']>
}
