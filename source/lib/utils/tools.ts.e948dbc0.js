"use strict";
const compose = (...fns) => {
  return fns.reduce(
    (a, b) => (...args) => a(b(...args))
  );
};
const isEmpty = (value) => {
  return value === "" || value === null || value === void 0;
};
exports.compose = compose;
exports.isEmpty = isEmpty;
