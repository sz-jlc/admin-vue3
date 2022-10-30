"use strict";
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
exports.emitsType = emitsType;
exports.propsType = propsType;
