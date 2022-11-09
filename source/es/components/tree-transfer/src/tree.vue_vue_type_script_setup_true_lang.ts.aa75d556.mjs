import { defineComponent, watch, nextTick, ref, computed, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, mergeProps, unref } from "vue";
import { t as toTree, a as convertArrayMap } from "../../../utils/tools.ts.e8d38fbf.mjs";
import { c as cloneDeep_1 } from "../../../vendor/index.js.d5491dba.mjs";
import { C as COMMON_TYPE } from "./constant.ts.6e902b26.mjs";
const _hoisted_1 = { class: "transfer-tree" };
const _hoisted_2 = { class: "transfer-tree__check-all" };
const _hoisted_3 = { class: "transfer-tree__search" };
const _hoisted_4 = { class: "transfer-tree__main" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tree",
  props: {
    props: { default: () => ({}) },
    type: null,
    list: null,
    title: null
  },
  setup(__props, { expose }) {
    const compProps = __props;
    watch(
      () => compProps.list,
      async () => {
        await nextTick();
        updateCheckAll();
      },
      {
        deep: true
      }
    );
    const treeRef = ref();
    const labelKey = computed(() => compProps.props.label || "label");
    const treeData = computed(() => {
      const { type, list, props } = compProps;
      const { id, parentId, children } = props;
      return toTree(
        cloneDeep_1(
          list.filter((item) => {
            const { __type__ } = item;
            return __type__ === type || __type__ == COMMON_TYPE;
          })
        ),
        {
          id,
          parentId,
          children
        }
      );
    });
    const listIdMap = computed(
      () => convertArrayMap(
        compProps.list.filter((item) => {
          const { __type__ } = item;
          return __type__ === compProps.type || __type__ == COMMON_TYPE;
        }),
        compProps.props.id || "id"
      )
    );
    const ids = computed(() => Object.keys(listIdMap.value));
    const getNodes = () => {
      const { type, list } = compProps;
      return list.filter((item) => item.__type__ === type || item.__type__ === COMMON_TYPE);
    };
    const filterKey = ref("");
    watch(filterKey, (value) => {
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
    const checkedAll = ref(false);
    const indeterminate = ref(false);
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
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_tree = resolveComponent("el-tree");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(_component_el_checkbox, {
            modelValue: checkedAll.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedAll.value = $event),
            indeterminate: indeterminate.value,
            label: __props.title,
            onChange: onChangeCheckAll
          }, null, 8, ["modelValue", "indeterminate", "label"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(_component_el_input, {
            placeholder: "\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22",
            modelValue: filterKey.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterKey.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        createElementVNode("div", _hoisted_4, [
          createVNode(_component_el_tree, mergeProps(_ctx.$attrs, {
            data: unref(treeData),
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
export {
  _sfc_main as _
};
