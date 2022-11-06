"use strict";
const vue = require("vue");
const utils_tools_ts = require("../../../utils/tools.ts.e948dbc0.js");
const vendor_index_js = require("../../../vendor/index.js.32496a5a.js");
const components_filter_src_filter_ts = require("./filter.ts.b086ae19.js");
const _hoisted_1 = { class: "el-date-table-cell" };
const _hoisted_2 = { class: "el-date-table-cell__text" };
const _hoisted_3 = { class: "filter__ctrl" };
const __default__ = vue.defineComponent({
  name: "jlc-filter"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: components_filter_src_filter_ts.propsType,
  emits: components_filter_src_filter_ts.emitsType,
  setup(__props, { expose, emit }) {
    const props = __props;
    const formRef = vue.ref();
    const bindForm = vue.reactive({});
    const filterParams = {};
    const defaultPlaceholder = {
      "el-input": "\u8BF7\u8F93\u5165",
      "el-input-number": "\u8BF7\u8F93\u5165",
      "el-select": "\u8BF7\u9009\u62E9",
      "el-date-picker": "\u8BF7\u9009\u62E9",
      "el-time-picker": "\u8BF7\u9009\u62E9",
      "el-cascader": "\u8BF7\u9009\u62E9"
    };
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
      const result = vendor_index_js.merge_1({}, defaultMap, filterItem);
      if (result.component === "el-input") {
        result.trim = utils_tools_ts.isEmpty(result.trim) ? true : result.trim;
      }
      result.attrs.placeholder = result.attrs.placeholder || defaultPlaceholder[result.component];
      return result;
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
    const handledFilters = vue.computed(() => {
      let result = [];
      props.filters.forEach((item) => {
        if (typeof item.key !== "string" && !Array.isArray(item.key)) {
          throw new Error("[jlc-filter] \u7F3A\u5C11\u5C5E\u6027\u6216\u7C7B\u578B\u4E0D\u6B63\u786E\uFF1Akey");
        }
        result = result.concat(utils_tools_ts.compose(handleRangeTime, handleDefaultValue)(item));
      });
      return result;
    });
    const filtersMap = {};
    const getTransformValues = () => {
      const result = {};
      Object.keys(filtersMap).forEach((key) => {
        if (!filtersMap[key])
          return;
        const value = vendor_index_js.cloneDeep_1(bindForm[key]);
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
        bindForm[key] = vendor_index_js.cloneDeep_1(value);
      });
    };
    const query = (queryNow = true) => {
      const transformValues = syncFilterParams();
      emit("query", transformValues, queryNow);
      return transformValues;
    };
    const setFilter = (filter, queryNow = true) => {
      Object.assign(bindForm, filter);
      return query(queryNow);
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
    const filterItemStyle = vue.computed(() => {
      const { columnCount } = props;
      const percentage = 100 / columnCount;
      return {
        width: `${percentage}%`,
        minWidth: `${percentage}%`
      };
    });
    vue.watch(
      handledFilters,
      (filters) => {
        const oldKeys = new Set(Object.keys(filtersMap));
        filters.forEach((item) => {
          oldKeys.delete(item.key);
          if (!filtersMap[item.key]) {
            filtersMap[item.key] = item;
            bindForm[item.key] = vendor_index_js.cloneDeep_1(item.value);
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
      setFilter,
      epForm: formRef
    });
    return (_ctx, _cache) => {
      const _component_el_form_item = vue.resolveComponent("el-form-item");
      const _component_el_button = vue.resolveComponent("el-button");
      const _component_el_form = vue.resolveComponent("el-form");
      return vue.openBlock(), vue.createBlock(_component_el_form, vue.mergeProps({
        ref_key: "formRef",
        ref: formRef,
        model: bindForm
      }, _ctx.$attrs, {
        onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(() => {
        }, ["prevent"])),
        class: "filter__form"
      }), {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(handledFilters), (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_el_form_item, {
              prop: item.key,
              label: item.label,
              key: index,
              style: vue.normalizeStyle(vue.unref(filterItemStyle)),
              class: "filter__form__item"
            }, {
              default: vue.withCtx(() => [
                item.slot ? vue.renderSlot(_ctx.$slots, item.slot, {
                  key: 0,
                  bindForm
                }, void 0, true) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.component), vue.mergeProps({
                  key: 1,
                  modelValue: bindForm[item.key],
                  "onUpdate:modelValue": ($event) => bindForm[item.key] = $event
                }, item.attrs || {}, vue.toHandlers(item.events || {}), {
                  class: "w-full",
                  onKeydown: vue.withKeys(($event) => onEnter(item), ["enter"])
                }), vue.createSlots({
                  default: vue.withCtx(() => [
                    item.children ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(item.children, (child, index2) => {
                      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(child.component), vue.mergeProps({ key: index2 }, child.attrs || {}, vue.toHandlers(child.events || {})), {
                        default: vue.withCtx(() => [
                          child.render ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(child.render(bindForm)), { key: 0 })) : child.content ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                            vue.createTextVNode(vue.toDisplayString(child.content), 1)
                          ], 64)) : vue.createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040);
                    }), 128)) : vue.createCommentVNode("", true)
                  ]),
                  _: 2
                }, [
                  item.component === "el-date-picker" ? {
                    name: "default",
                    fn: vue.withCtx(({ text }) => [
                      vue.createElementVNode("div", _hoisted_1, [
                        vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(text), 1)
                      ])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["modelValue", "onUpdate:modelValue", "onKeydown"]))
              ]),
              _: 2
            }, 1032, ["prop", "label", "style"]);
          }), 128)),
          vue.renderSlot(_ctx.$slots, "filter-ctrl", {
            query: (queryNow = true) => query(queryNow),
            reset: (queryNow = true) => reset(queryNow)
          }, () => [
            vue.createElementVNode("div", _hoisted_3, [
              vue.createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[0] || (_cache[0] = ($event) => query(true))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u67E5\u8BE2")
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_button, {
                type: "info",
                onClick: _cache[1] || (_cache[1] = ($event) => reset(true))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u91CD\u7F6E")
                ]),
                _: 1
              })
            ])
          ], true)
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
exports._sfc_main = _sfc_main;
