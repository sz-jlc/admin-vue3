import { p as propsType$1 } from "../../filter/src/filter.ts.1ac07432.mjs";
import { p as propsType$2 } from "../../table/src/table.ts.d33ed4fb.mjs";
import { e as epTableCommonEventNames } from "../../../utils/ep-table-common.ts.e9c47ca3.mjs";
const propsType = {
  filters: propsType$1.filters,
  columns: propsType$2.columns,
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
  ...epTableCommonEventNames
];
export {
  emitsType as e,
  propsType as p
};
