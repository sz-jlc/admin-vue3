"use strict";
const RESERVE_SLOTS = ["filter-bottom", "list-bottom"];
const getOptionSlots = (target) => {
  const result = target.filter((item) => {
    if (item.slot) {
      if (RESERVE_SLOTS.includes(item.slot)) {
        throw new Error(`${item.slot}\u4E3A\u7EC4\u4EF6\u5185\u90E8\u9884\u7559\u63D2\u69FD\uFF0C\u8BF7\u4FEE\u6539\u63D2\u69FD\u540D\u79F0`);
      }
      return true;
    }
  }).map((item) => item.slot);
  return result;
};
exports.getOptionSlots = getOptionSlots;
