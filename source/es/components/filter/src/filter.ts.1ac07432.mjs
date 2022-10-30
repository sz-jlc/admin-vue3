const propsType = {
  filters: {
    type: Array,
    default: () => [],
    required: true
  },
  columnCount: {
    type: Number,
    default: 5
  }
};
const emitsType = [
  "query",
  "reset"
];
export {
  emitsType as e,
  propsType as p
};
