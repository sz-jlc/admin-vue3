const compose = (...fns) => {
  return fns.reduce(
    (a, b) => (...args) => a(b(...args))
  );
};
const isEmpty = (value) => {
  return value === "" || value === null || value === void 0;
};
const toTree = (list, config) => {
  const {
    id = "id",
    parentId = "parentId",
    children = "children"
  } = config || {};
  return list.filter((item1) => {
    item1[children] = list.filter((item2) => item1[id] === item2[parentId]);
    return isEmpty(item1[parentId]);
  });
};
const flatTree = (tree, config) => {
  const { children = "children" } = config || {};
  const result = [];
  function _flat(tree2) {
    for (const item of tree2) {
      result.push(item);
      if (item[children]) {
        _flat(item[children]);
      }
    }
  }
  _flat(tree);
  return result;
};
const convertArrayMap = (arr, key) => {
  return arr.reduce((res, cur) => {
    res[cur[key]] = cur;
    return res;
  }, {});
};
export {
  convertArrayMap as a,
  compose as c,
  flatTree as f,
  isEmpty as i,
  toTree as t
};
