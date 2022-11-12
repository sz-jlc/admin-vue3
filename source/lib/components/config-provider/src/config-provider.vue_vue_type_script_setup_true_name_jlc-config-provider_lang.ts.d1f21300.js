"use strict";
const vue = require("vue");
const utils_globalConfig_ts = require("../../../utils/global-config.ts.3f269d76.js");
const components_configProvider_src_configProvider_ts = require("./config-provider.ts.824c814c.js");
const __default__ = vue.defineComponent({
  name: "jlc-config-provider"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: components_configProvider_src_configProvider_ts.propsType,
  setup(__props) {
    const props = __props;
    vue.provide(utils_globalConfig_ts.configProviderContextKey, props);
    return (_ctx, _cache) => {
      return vue.renderSlot(_ctx.$slots, "default");
    };
  }
});
exports._sfc_main = _sfc_main;
