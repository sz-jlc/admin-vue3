"use strict";
const components_filter_src_filter_ts = require("../../filter/src/filter.ts.b086ae19.js");
const components_table_src_table_ts = require("../../table/src/table.ts.85c6c2e4.js");
const utils_epTableCommon_ts = require("../../../utils/ep-table-common.ts.c785f5de.js");
const propsType = {
  filters: components_filter_src_filter_ts.propsType.filters,
  columns: components_table_src_table_ts.propsType.columns,
  getData: {
    type: Function,
    required: true
  },
  initGet: {
    type: Boolean,
    default: true
  },
  isPage: {
    type: Boolean,
    default: true
  },
  filterProps: {
    type: Object,
    default: () => ({})
  },
  filterEvents: {
    type: Object,
    default: () => ({})
  },
  tableProps: {
    type: Object,
    default: () => ({})
  },
  tableEvents: {
    type: Object,
    default: () => ({})
  },
  pageProps: {
    type: Object,
    default: () => ({})
  },
  pageEvents: {
    type: Object,
    default: () => ({})
  }
};
const emitsType = [
  "get-data",
  "got-data",
  ...utils_epTableCommon_ts.epTableCommonEventNames
];
exports.emitsType = emitsType;
exports.propsType = propsType;
