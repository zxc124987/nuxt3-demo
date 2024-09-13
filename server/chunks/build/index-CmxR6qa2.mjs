import { E as ElForm, a as ElFormItem } from './el-input-CSDIjYfb.mjs';
import { E as ElInput } from './index-CtGaUDm6.mjs';
import { u as useHttp, E as ElButton } from './useHttp-CmezqO8G.mjs';
import { _ as _export_sfc, u as useCookie, E as ElMessage, n as navigateTo } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './use-form-common-props-C7qPbkPW.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
import './use-form-item-JZbtd8a8.mjs';
import '@ctrl/tinycolor';
import './useGlobal-8MrFQx0w.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLogin = useCookie("isLogin");
    const formRef = ref(null);
    const form = ref({
      acct_id: "a",
      pword: "a"
    });
    const rules = ref({
      acct_id: [{ required: true, message: "\u5FC5\u586B", trigger: "change" }],
      pword: [{ required: true, message: "\u5FC5\u586B", trigger: "change" }]
    });
    function submit(formEl) {
      if (!formEl)
        return;
      formEl.validate(async (valid) => {
        if (valid) {
          await login();
        } else {
          ElMessage({
            message: "\u8868\u55AE\u8F38\u5165\u932F\u8AA4",
            type: "error"
          });
        }
      });
    }
    const login = async () => {
      const res = await useHttp("/api/login");
      if (res.isOK) {
        navigateTo("/dashboard");
        isLogin.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))} data-v-28a5c41d>`);
      _push(ssrRenderComponent(_component_el_form, {
        "label-position": "top",
        ref_key: "formRef",
        ref: formRef,
        model: unref(form),
        rules: unref(rules)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u5E33\u865F",
              prop: "acct_id"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    type: "text",
                    modelValue: unref(form).acct_id,
                    "onUpdate:modelValue": ($event) => unref(form).acct_id = $event,
                    placeholder: "\u8ACB\u8F38\u5165"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      type: "text",
                      modelValue: unref(form).acct_id,
                      "onUpdate:modelValue": ($event) => unref(form).acct_id = $event,
                      placeholder: "\u8ACB\u8F38\u5165"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u5BC6\u78BC",
              prop: "pword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    type: "password",
                    modelValue: unref(form).pword,
                    "onUpdate:modelValue": ($event) => unref(form).pword = $event,
                    "show-password": "",
                    placeholder: "\u8ACB\u8F38\u5165"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      type: "password",
                      modelValue: unref(form).pword,
                      "onUpdate:modelValue": ($event) => unref(form).pword = $event,
                      "show-password": "",
                      placeholder: "\u8ACB\u8F38\u5165"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: ($event) => submit(unref(formRef))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u9001\u51FA`);
                } else {
                  return [
                    createTextVNode("\u9001\u51FA")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form_item, {
                label: "\u5E33\u865F",
                prop: "acct_id"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    type: "text",
                    modelValue: unref(form).acct_id,
                    "onUpdate:modelValue": ($event) => unref(form).acct_id = $event,
                    placeholder: "\u8ACB\u8F38\u5165"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "\u5BC6\u78BC",
                prop: "pword"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    type: "password",
                    modelValue: unref(form).pword,
                    "onUpdate:modelValue": ($event) => unref(form).pword = $event,
                    "show-password": "",
                    placeholder: "\u8ACB\u8F38\u5165"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                onClick: ($event) => submit(unref(formRef))
              }, {
                default: withCtx(() => [
                  createTextVNode("\u9001\u51FA")
                ]),
                _: 1
              }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28a5c41d"]]);

export { index as default };
//# sourceMappingURL=index-CmxR6qa2.mjs.map
