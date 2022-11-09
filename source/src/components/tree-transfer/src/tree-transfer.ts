import type { PropType } from 'vue'
import type { Props } from './types'

export const propsType = {
  data: {
    type: Array as PropType<any[]>,
    default: []
  },
  targetIds: {
    type: Array as PropType<any[]>,
    default: []
  },
  props: {
    type: Object as PropType<Props>,
    default: () => ({})
  },
  sourceTitle: {
    type: String,
    default: '源'
  },
  targetTitle: {
    type: String,
    default: '目标'
  }
}

export const emitsType = []
