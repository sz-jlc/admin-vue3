const propsType = {
  columns: {
    type: Array,
    default: () => [],
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  update: {
    type: Boolean,
    default: false
  },
  delete: {
    type: Boolean,
    default: false
  }
};
const emitsType = [
  "query",
  "update",
  "delete"
];
export {
  emitsType as e,
  propsType as p
};
