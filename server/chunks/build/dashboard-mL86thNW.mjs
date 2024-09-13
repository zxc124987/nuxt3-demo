import { _ as __nuxt_component_0 } from './nuxt-link-DTNfuNCQ.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'lodash-unified';
import '@vue/shared';

const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u9996\u9801 - Nuxt3 \u9AD8\u6548\u5165\u9580",
      meta: [
        { property: "og:title", content: "\u9996\u9801 - Nuxt3 \u9AD8\u6548\u5165\u9580" },
        { property: "og:url", content: "http://localhost:3000/dashboard" },
        { property: "og:image", content: "http://localhost:3000/share.jpg" },
        { name: "description", content: "\u9996\u9801 - \u6700\u68D2\u7684Nuxt3" },
        {
          property: "og:description",
          content: "\u9996\u9801 - \u6700\u68D2\u7684Nuxt3"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p>Page: dashboard</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/room" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Room`);
          } else {
            return [
              createTextVNode("Room")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/verify" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Verify`);
          } else {
            return [
              createTextVNode("Verify")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-mL86thNW.mjs.map
