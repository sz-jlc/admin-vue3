import { defineComponent, computed, ref, watch, onMounted, nextTick, resolveComponent, openBlock, createElementBlock, createVNode, unref, renderSlot, createElementVNode, withCtx, createTextVNode } from "vue";
import { c as cloneDeep_1 } from "../../../vendor/index.js.d5491dba.mjs";
import { T as Tree } from "./tree.vue.5cd73d9f.mjs";
import { f as flatTree } from "../../../utils/tools.ts.e8d38fbf.mjs";
import { S as SOURCE_TYPE, T as TARGET_TYPE, C as COMMON_TYPE } from "./constant.ts.6e902b26.mjs";
import { p as propsType } from "./tree-transfer.ts.4d0218c0.mjs";
const _hoisted_1 = { class: "tree-transfer" };
const _hoisted_2 = { class: "tree-transfer__ctrl" };
const __default__ = defineComponent({
  name: "jlc-tree-transfer"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: propsType,
  setup(__props, { expose }) {
    const compProps = __props;
    const props = computed(() => {
      const { children = "children", parentId = "parentId", id = "id" } = compProps.props;
      return { ...compProps.props, children, parentId, id };
    });
    const hanledData = computed(() => {
      const { children, parentId, id } = props.value;
      const data = cloneDeep_1(compProps.data);
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
    const sourceTreeRef = ref();
    const targetTreeRef = ref();
    const getFlatList = () => {
      return flatTree(hanledData.value, { children: props.value.children }).map((item) => ({
        ...item,
        __type__: SOURCE_TYPE
      }));
    };
    const flatList = ref(getFlatList());
    watch(
      () => compProps.targetIds,
      () => {
        setTargetTree();
      }
    );
    watch(
      () => compProps.data,
      () => {
        flatList.value = getFlatList();
      }
    );
    onMounted(() => {
      setTargetTree();
    });
    const setTargetTree = () => {
      const { parentId } = props.value;
      const checkedIds = compProps.targetIds.filter(
        (id) => !flatList.value.some((item) => item[parentId] === id)
      );
      sourceTreeRef.value.tree.setCheckedKeys(checkedIds);
      nextTick(() => {
        toTarget();
      });
    };
    const toggle = (tree, type) => {
      const id = props.value.id;
      const checkedNodes = new Set(tree.getCheckedNodes().map((item) => item[id]));
      const halfCheckedNodes = new Set(tree.getHalfCheckedNodes().map((item) => item[id]));
      for (const item of flatList.value) {
        if (checkedNodes.has(item[id])) {
          item.__type__ = type === SOURCE_TYPE ? TARGET_TYPE : SOURCE_TYPE;
        } else if (halfCheckedNodes.has(item[id])) {
          item.__type__ = COMMON_TYPE;
        }
      }
    };
    const toTarget = () => {
      toggle(sourceTreeRef.value.tree, SOURCE_TYPE);
    };
    const toSource = () => {
      toggle(targetTreeRef.value.tree, TARGET_TYPE);
    };
    const getSourceNodes = () => sourceTreeRef.value.getNodes();
    const getTargetNodes = () => targetTreeRef.value.getNodes();
    const getCommonNodes = () => flatList.value.filter((item) => item.__type__ === COMMON_TYPE);
    expose({
      getSourceNodes,
      getTargetNodes,
      getCommonNodes
    });
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Tree, {
          list: flatList.value,
          props: unref(props),
          type: unref(SOURCE_TYPE),
          title: _ctx.sourceTitle,
          ref_key: "sourceTreeRef",
          ref: sourceTreeRef
        }, null, 8, ["list", "props", "type", "title"]),
        renderSlot(_ctx.$slots, "middle", {
          toTarget,
          toSource
        }, () => [
          createElementVNode("div", _hoisted_2, [
            createVNode(_component_el_button, { onClick: toTarget }, {
              default: withCtx(() => [
                createTextVNode("\u6DFB\u52A0 >")
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              class: "tree-transfer__remove",
              onClick: toSource
            }, {
              default: withCtx(() => [
                createTextVNode("< \u79FB\u9664")
              ]),
              _: 1
            })
          ])
        ], true),
        createVNode(Tree, {
          list: flatList.value,
          props: unref(props),
          type: unref(TARGET_TYPE),
          title: _ctx.targetTitle,
          ref_key: "targetTreeRef",
          ref: targetTreeRef
        }, null, 8, ["list", "props", "type", "title"])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
