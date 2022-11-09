const propsType = {
  data: {
    type: Array,
    default: []
  },
  targetIds: {
    type: Array,
    default: []
  },
  props: {
    type: Object,
    default: () => ({})
  },
  sourceTitle: {
    type: String,
    default: "\u6E90"
  },
  targetTitle: {
    type: String,
    default: "\u76EE\u6807"
  }
};
export {
  propsType as p
};
