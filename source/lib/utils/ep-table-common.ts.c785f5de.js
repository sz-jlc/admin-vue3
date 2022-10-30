"use strict";
const getEpTableCommonFns = (target) => {
  return {
    clearSelection: target.clearSelection,
    getSelectionRows: target.getSelectionRows,
    toggleRowSelection: target.toggleRowSelection,
    toggleAllSelection: target.toggleAllSelection,
    toggleRowExpansion: target.toggleRowExpansion,
    setCurrentRow: target.setCurrentRow
  };
};
const epTableCommonEventNames = [
  "select",
  "select-all",
  "selection-change",
  "row-click",
  "row-dblclick",
  "sort-change",
  "current-change"
];
exports.epTableCommonEventNames = epTableCommonEventNames;
exports.getEpTableCommonFns = getEpTableCommonFns;
