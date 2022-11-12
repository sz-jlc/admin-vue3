import { defineComponent, provide, renderSlot } from "vue";
import { c as configProviderContextKey } from "../../../utils/global-config.ts.edf1d8aa.mjs";
import { p as propsType } from "./config-provider.ts.f8fa73af.mjs";
const __default__ = defineComponent({
  name: "jlc-config-provider"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: propsType,
  setup(__props) {
    const props = __props;
    provide(configProviderContextKey, props);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
export {
  _sfc_main as _
};
