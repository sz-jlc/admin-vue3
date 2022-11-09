"use strict";
const vue = require("vue");
const vendor_index_js = require("../../../vendor/index.js.32496a5a.js");
const components_treeTransfer_src_tree_vue = require("./tree.vue.4a06b25b.js");
const utils_tools_ts = require("../../../utils/tools.ts.8ca40bbc.js");
const components_treeTransfer_src_constant_ts = require("./constant.ts.5e622eff.js");
const components_treeTransfer_src_treeTransfer_ts = require("./tree-transfer.ts.8583dd87.js");
const _hoisted_1 = { class: "tree-transfer" };
const _hoisted_2 = { class: "tree-transfer__ctrl" };
const __default__ = vue.defineComponent({
  name: "jlc-tree-transfer"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: components_treeTransfer_src_treeTransfer_ts.propsType,
  setup(__props, { expose }) {
    const compProps = __props;
    const props = vue.computed(() => {
      const { children = "children", parentId = "parentId", id = "id" } = compProps.props;
      return { ...compProps.props, children, parentId, id };
    });
    const hanledData = vue.computed(() => {
      const { children, parentId, id } = props.value;
      const data = vendor_index_js.cloneDeep_1(compProps.data);
      function eachTree(tree, parent) {
        for (const item of tree) {
          if (parent) {
            if (item[parentId] === void 0) {
              item[parentId] = parent[id];
            }
          }
          if (item[children]) {
            eachTree(item[children], item);
          }
        }
      }
      eachTree(data);
      return data;
    });
    const sourceTreeRef = vue.ref();
    const targetTreeRef = vue.ref();
    const getFlatList = () => {
      return utils_tools_ts.flatTree(hanledData.value, { children: props.value.children }).map((item) => ({
        ...item,
        __type__: components_treeTransfer_src_constant_ts.SOURCE_TYPE
      }));
    };
    const flatList = vue.ref(getFlatList());
    vue.watch(
      () => compProps.targetIds,
      () => {
        setTargetTree();
      }
    );
    vue.watch(
      () => compProps.data,
      () => {
        flatList.value = getFlatList();
      }
    );
    vue.onMounted(() => {
      setTargetTree();
    });
    const setTargetTree = () => {
      const { parentId } = props.value;
      const checkedIds = compProps.targetIds.filter(
        (id) => !flatList.value.some((item) => item[parentId] === id)
      );
      sourceTreeRef.value.tree.setCheckedKeys(checkedIds);
      vue.nextTick(() => {
        toTarget();
      });
    };
    const toggle = (tree, type) => {
      const id = props.value.id;
      const checkedNodes = new Set(tree.getCheckedNodes().map((item) => item[id]));
      const halfCheckedNodes = new Set(tree.getHalfCheckedNodes().map((item) => item[id]));
      for (const item of flatList.value) {
        if (checkedNodes.has(item[id])) {
          item.__type__ = type === components_treeTransfer_src_constant_ts.SOURCE_TYPE ? components_treeTransfer_src_constant_ts.TARGET_TYPE : components_treeTransfer_src_constant_ts.SOURCE_TYPE;
        } else if (halfCheckedNodes.has(item[id])) {
          item.__type__ = components_treeTransfer_src_constant_ts.COMMON_TYPE;
        }
      }
    };
    const toTarget = () => {
      toggle(sourceTreeRef.value.tree, components_treeTransfer_src_constant_ts.SOURCE_TYPE);
    };
    const toSource = () => {
      toggle(targetTreeRef.value.tree, components_treeTransfer_src_constant_ts.TARGET_TYPE);
    };
    const getSourceNodes = () => sourceTreeRef.value.getNodes();
    const getTargetNodes = () => targetTreeRef.value.getNodes();
    const getCommonNodes = () => flatList.value.filter((item) => item.__type__ === components_treeTransfer_src_constant_ts.COMMON_TYPE);
    expose({
      getSourceNodes,
      getTargetNodes,
      getCommonNodes
    });
    return (_ctx, _cache) => {
      const _component_el_button = vue.resolveComponent("el-button");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(components_treeTransfer_src_tree_vue.Tree, {
          list: flatList.value,
          props: vue.unref(props),
          type: vue.unref(components_treeTransfer_src_constant_ts.SOURCE_TYPE),
          title: _ctx.sourceTitle,
          ref_key: "sourceTreeRef",
          ref: sourceTreeRef
        }, null, 8, ["list", "props", "type", "title"]),
        vue.renderSlot(_ctx.$slots, "middle", {
          toTarget,
          toSource
        }, () => [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createVNode(_component_el_button, { onClick: toTarget }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u6DFB\u52A0 >")
              ]),
              _: 1
            }),
            vue.createVNode(_component_el_button, {
              class: "tree-transfer__remove",
              onClick: toSource
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("< \u79FB\u9664")
              ]),
              _: 1
            })
          ])
        ], true),
        vue.createVNode(components_treeTransfer_src_tree_vue.Tree, {
          list: flatList.value,
          props: vue.unref(props),
          type: vue.unref(components_treeTransfer_src_constant_ts.TARGET_TYPE),
          title: _ctx.targetTitle,
          ref_key: "targetTreeRef",
          ref: targetTreeRef
        }, null, 8, ["list", "props", "type", "title"])
      ]);
    };
  }
});
exports._sfc_main = _sfc_main;
