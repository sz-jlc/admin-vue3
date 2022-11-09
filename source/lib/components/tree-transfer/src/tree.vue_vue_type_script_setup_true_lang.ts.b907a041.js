"use strict";
const vue = require("vue");
const utils_tools_ts = require("../../../utils/tools.ts.8ca40bbc.js");
const vendor_index_js = require("../../../vendor/index.js.32496a5a.js");
const components_treeTransfer_src_constant_ts = require("./constant.ts.5e622eff.js");
const _hoisted_1 = { class: "transfer-tree" };
const _hoisted_2 = { class: "transfer-tree__check-all" };
const _hoisted_3 = { class: "transfer-tree__search" };
const _hoisted_4 = { class: "transfer-tree__main" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "tree",
  props: {
    props: { default: () => ({}) },
    type: null,
    list: null,
    title: null
  },
  setup(__props, { expose }) {
    const compProps = __props;
    vue.watch(
      () => compProps.list,
      async () => {
        await vue.nextTick();
        updateCheckAll();
      },
      {
        deep: true
      }
    );
    const treeRef = vue.ref();
    const labelKey = vue.computed(() => compProps.props.label || "label");
    const treeData = vue.computed(() => {
      const { type, list, props } = compProps;
      const { id, parentId, children } = props;
      return utils_tools_ts.toTree(
        vendor_index_js.cloneDeep_1(
          list.filter((item) => {
            const { __type__ } = item;
            return __type__ === type || __type__ == components_treeTransfer_src_constant_ts.COMMON_TYPE;
          })
        ),
        {
          id,
          parentId,
          children
        }
      );
    });
    const listIdMap = vue.computed(
      () => utils_tools_ts.convertArrayMap(
        compProps.list.filter((item) => {
          const { __type__ } = item;
          return __type__ === compProps.type || __type__ == components_treeTransfer_src_constant_ts.COMMON_TYPE;
        }),
        compProps.props.id || "id"
      )
    );
    const ids = vue.computed(() => Object.keys(listIdMap.value));
    const getNodes = () => {
      const { type, list } = compProps;
      return list.filter((item) => item.__type__ === type || item.__type__ === components_treeTransfer_src_constant_ts.COMMON_TYPE);
    };
    const filterKey = vue.ref("");
    vue.watch(filterKey, (value) => {
      treeRef.value.filter(value);
    });
    const findParents = (data) => {
      const result = [data];
      for (let i = 0; i < result.length; i++) {
        const item = result[i];
        const parent = listIdMap.value[item.parentId];
        if (parent) {
          result.push(parent);
        }
      }
      result.shift();
      return result;
    };
    const filterNode = (value, data) => {
      if (!value)
        return true;
      const transformValue = value.toUpperCase();
      if (data[labelKey.value].toUpperCase().includes(transformValue)) {
        return true;
      }
      const parents = findParents(data);
      if (parents.some((item) => item[labelKey.value].toUpperCase().includes(transformValue))) {
        return true;
      }
      return false;
    };
    const checkedAll = vue.ref(false);
    const indeterminate = vue.ref(false);
    const onChangeCheckAll = (value) => {
      treeRef.value.setCheckedKeys(value ? ids.value : []);
    };
    const updateCheckAll = () => {
      const checkedCount = treeRef.value.getCheckedNodes().length;
      if (checkedCount === 0) {
        indeterminate.value = false;
        checkedAll.value = false;
        return;
      }
      if (checkedCount === 0) {
        indeterminate.value = false;
        checkedAll.value = false;
      } else if (checkedCount === ids.value.length) {
        indeterminate.value = false;
        checkedAll.value = true;
      } else {
        checkedAll.value = false;
        indeterminate.value = true;
      }
    };
    expose({
      tree: treeRef,
      getNodes
    });
    return (_ctx, _cache) => {
      const _component_el_checkbox = vue.resolveComponent("el-checkbox");
      const _component_el_input = vue.resolveComponent("el-input");
      const _component_el_tree = vue.resolveComponent("el-tree");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createVNode(_component_el_checkbox, {
            modelValue: checkedAll.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedAll.value = $event),
            indeterminate: indeterminate.value,
            label: __props.title,
            onChange: onChangeCheckAll
          }, null, 8, ["modelValue", "indeterminate", "label"])
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          vue.createVNode(_component_el_input, {
            placeholder: "\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22",
            modelValue: filterKey.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterKey.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        vue.createElementVNode("div", _hoisted_4, [
          vue.createVNode(_component_el_tree, vue.mergeProps(_ctx.$attrs, {
            data: vue.unref(treeData),
            "default-expand-all": "",
            "expand-on-click-node": true,
            "node-key": __props.props.id,
            "show-checkbox": "",
            "check-on-click-node": true,
            "filter-node-method": filterNode,
            ref_key: "treeRef",
            ref: treeRef,
            props: __props.props,
            onCheck: updateCheckAll
          }), null, 16, ["data", "node-key", "props"])
        ])
      ]);
    };
  }
});
exports._sfc_main = _sfc_main;
