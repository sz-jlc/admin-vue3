import { defineComponent, ref, reactive, computed, watch, resolveComponent, openBlock, createBlock, mergeProps, withModifiers, withCtx, createElementBlock, Fragment, renderList, unref, normalizeStyle, renderSlot, resolveDynamicComponent, toHandlers, withKeys, createSlots, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createVNode } from "vue";
import { c as compose } from "../../../utils/tools.ts.d0af79cb.mjs";
import { c as cloneDeep_1, m as merge_1 } from "../../../vendor/index.js.d5491dba.mjs";
import { p as propsType, e as emitsType } from "./filter.ts.1ac07432.mjs";
const _hoisted_1 = { class: "el-date-table-cell" };
const _hoisted_2 = { class: "el-date-table-cell__text" };
const _hoisted_3 = { class: "filter__ctrl" };
const __default__ = defineComponent({
  name: "jlc-filter"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: propsType,
  emits: emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const formRef = ref();
    const bindForm = reactive({});
    const filterParams = {};
    const handleDefaultValue = (filterItem) => {
      const defaultMap = {
        component: "el-input",
        attrs: {
          clearable: true
        },
        events: {},
        flatTransform: true,
        enterQuery: true
      };
      return merge_1({}, defaultMap, filterItem);
    };
    const handleRangeTime = (filterItem) => {
      const { label, key, type, value = [], transform } = filterItem;
      if (type !== "rangeTime")
        return filterItem;
      if (!Array.isArray(key)) {
        throw new Error("[jlc-filter] \u5F53type\u4E3ArangeTime\u65F6\uFF0Ckey\u5FC5\u987B\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF1A[key1, key2]");
      }
      const [startField, endField] = key;
      const res = [
        {
          label,
          transform,
          component: "el-date-picker",
          key: startField,
          value: value[0],
          attrs: {
            placeholder: "\u5F00\u59CB\u65F6\u95F4",
            type: "datetime",
            disabledDate(date) {
              return new Date(date).getTime() > new Date(bindForm[endField]).getTime();
            }
          }
        },
        {
          label: "\u81F3",
          transform,
          component: "el-date-picker",
          key: endField,
          value: value[1],
          attrs: {
            placeholder: "\u7ED3\u675F\u65F6\u95F4",
            type: "datetime",
            disabledDate(date) {
              return new Date(date).getTime() < new Date(bindForm[startField]).getTime();
            }
          }
        }
      ];
      return res;
    };
    const handledFilters = computed(() => {
      let result = [];
      props.filters.forEach((item) => {
        if (typeof item.key !== "string" && !Array.isArray(item.key)) {
          throw new Error("[jlc-filter] \u7F3A\u5C11\u5C5E\u6027\u6216\u7C7B\u578B\u4E0D\u6B63\u786E\uFF1Akey");
        }
        result = result.concat(compose(handleRangeTime, handleDefaultValue)(item));
      });
      return result;
    });
    const filtersMap = {};
    const getTransformValues = () => {
      const result = {};
      Object.keys(filtersMap).forEach((key) => {
        if (!filtersMap[key])
          return;
        const value = cloneDeep_1(bindForm[key]);
        const { transform, flatTransform, trim } = filtersMap[key];
        if (transform) {
          const transformVal = transform(value);
          if (flatTransform && typeof transformVal === "object") {
            Object.assign(result, transformVal);
          } else {
            result[key] = transformVal;
          }
        } else if (trim && typeof value === "string") {
          result[key] = value.trim();
        } else {
          result[key] = value;
        }
      });
      return result;
    };
    const syncFilterParams = () => {
      const transformValues = getTransformValues();
      Object.assign(filterParams, transformValues);
      return transformValues;
    };
    const handleInitValue = () => {
      handledFilters.value.forEach((item) => {
        const { key, value } = item;
        bindForm[key] = cloneDeep_1(value);
      });
    };
    const query = (queryNow = true) => {
      const transformValues = syncFilterParams();
      emit("query", transformValues, queryNow);
    };
    const reset = (queryNow = true) => {
      handleInitValue();
      const transformValues = syncFilterParams();
      emit("reset", transformValues, queryNow);
    };
    const onEnter = (filterItem) => {
      if (filterItem.enterQuery) {
        query();
      }
    };
    const filterItemStyle = computed(() => {
      const { columnCount } = props;
      const percentage = 100 / columnCount;
      return {
        width: `${percentage}%`,
        minWidth: `${percentage}%`
      };
    });
    watch(
      handledFilters,
      (filters) => {
        const oldKeys = new Set(Object.keys(filtersMap));
        filters.forEach((item) => {
          oldKeys.delete(item.key);
          if (!filtersMap[item.key]) {
            filtersMap[item.key] = item;
            bindForm[item.key] = cloneDeep_1(item.value);
          }
        });
        oldKeys.forEach((key) => {
          delete filterParams[key];
          delete bindForm[key];
        });
        syncFilterParams();
      },
      {
        immediate: true
      }
    );
    const init = () => {
      syncFilterParams();
    };
    init();
    expose({
      query,
      reset,
      epForm: formRef
    });
    return (_ctx, _cache) => {
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        model: bindForm
      }, _ctx.$attrs, {
        onSubmit: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"])),
        class: "filter__form"
      }), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(handledFilters), (item, index) => {
            return openBlock(), createBlock(_component_el_form_item, {
              prop: item.key,
              label: item.label,
              key: index,
              style: normalizeStyle(unref(filterItemStyle)),
              class: "filter__form__item"
            }, {
              default: withCtx(() => [
                item.slot ? renderSlot(_ctx.$slots, item.slot, {
                  key: 0,
                  bindForm
                }, void 0, true) : (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
                  key: 1,
                  modelValue: bindForm[item.key],
                  "onUpdate:modelValue": ($event) => bindForm[item.key] = $event
                }, item.attrs || {}, toHandlers(item.events || {}), {
                  class: "w-full",
                  onKeydown: withKeys(($event) => onEnter(item), ["enter"])
                }), createSlots({
                  default: withCtx(() => [
                    item.children ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item.children, (child, index2) => {
                      return openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({ key: index2 }, child.attrs, toHandlers(child.events)), {
                        default: withCtx(() => [
                          child.render ? (openBlock(), createBlock(resolveDynamicComponent(child.render(bindForm)), { key: 0 })) : child.content ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(child.content), 1)
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, [
                  item.component === "el-date-picker" ? {
                    name: "default",
                    fn: withCtx(({ text }) => [
                      createElementVNode("div", _hoisted_1, [
                        createElementVNode("span", _hoisted_2, toDisplayString(text), 1)
                      ])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["modelValue", "onUpdate:modelValue", "onKeydown"]))
              ]),
              _: 2
            }, 1032, ["prop", "label", "style"]);
          }), 128)),
          createElementVNode("div", _hoisted_3, [
            createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => query(true))
            }, {
              default: withCtx(() => [
                createTextVNode("\u67E5\u8BE2")
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "info",
              onClick: _cache[1] || (_cache[1] = ($event) => reset(true))
            }, {
              default: withCtx(() => [
                createTextVNode("\u91CD\u7F6E")
              ]),
              _: 1
            })
          ])
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
export {
  _sfc_main as _
};
