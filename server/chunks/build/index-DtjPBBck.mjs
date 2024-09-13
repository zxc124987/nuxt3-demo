import { _ as __nuxt_component_0 } from './nuxt-link-DTNfuNCQ.mjs';
import { q as useRoute } from './server.mjs';
import { unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const workNo = route.params.workNo;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p>\u76EE\u524D\u8DEF\u7531\u4F4D\u7F6E: verify/[workNo]/index</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/verify/${unref(workNo)}/category`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u63A5\u8457\u8DF3\u9032category\u7684\u8CC7\u6599\u593E\u5167`);
          } else {
            return [
              createTextVNode("\u63A5\u8457\u8DF3\u9032category\u7684\u8CC7\u6599\u593E\u5167")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify/[workNo]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DtjPBBck.mjs.map
