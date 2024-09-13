import { defineComponent, inject, withDirectives, h, unref, openBlock, createElementBlock, Fragment, createElementVNode, renderList, createBlock, createVNode, useSlots, provide, computed, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, ref, withAsyncContext, withCtx, useSSRContext } from 'vue';
import { isNil } from 'lodash-unified';
import { g as getNormalizedProps, f as flattedChildren } from './vnode-BQZtFTL-.mjs';
import { k as addUnit, a as useNamespace, b as buildProps, d as definePropType, p as useSizeProp, w as withInstall, o as withNoopInstall, q as useRoute, c as _export_sfc$1, s as __nuxt_component_1 } from './server.mjs';
import { u as useFormSize } from './use-form-common-props-C7qPbkPW.mjs';
import { u as useGlobal } from './useGlobal-8MrFQx0w.mjs';
import { u as useFetch } from './fetch-dr1VWunK.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import '@vue/shared';
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

const descriptionsKey = Symbol("elDescriptions");
var ElDescriptionsCell = defineComponent({
  name: "ElDescriptionsCell",
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String,
      default: "td"
    },
    type: {
      type: String
    }
  },
  setup() {
    const descriptions = inject(descriptionsKey, {});
    return {
      descriptions
    };
  },
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    const item = getNormalizedProps(this.cell);
    const directives = (((_a = this.cell) == null ? void 0 : _a.dirs) || []).map((dire) => {
      const { dir, arg, modifiers, value } = dire;
      return [dir, value, arg, modifiers];
    });
    const { border, direction } = this.descriptions;
    const isVertical = direction === "vertical";
    const label = ((_d = (_c = (_b = this.cell) == null ? void 0 : _b.children) == null ? void 0 : _c.label) == null ? void 0 : _d.call(_c)) || item.label;
    const content = (_g = (_f = (_e = this.cell) == null ? void 0 : _e.children) == null ? void 0 : _f.default) == null ? void 0 : _g.call(_f);
    const span = item.span;
    const rowspan = item.rowspan;
    const align = item.align ? `is-${item.align}` : "";
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const style = {
      width: addUnit(item.width),
      minWidth: addUnit(item.minWidth)
    };
    const ns = useNamespace("descriptions");
    switch (this.type) {
      case "label":
        return withDirectives(h(this.tag, {
          style,
          class: [
            ns.e("cell"),
            ns.e("label"),
            ns.is("bordered-label", border),
            ns.is("vertical-label", isVertical),
            labelAlign,
            labelClassName
          ],
          colSpan: isVertical ? span : 1,
          rowspan: isVertical ? 1 : rowspan
        }, label), directives);
      case "content":
        return withDirectives(h(this.tag, {
          style,
          class: [
            ns.e("cell"),
            ns.e("content"),
            ns.is("bordered-content", border),
            ns.is("vertical-content", isVertical),
            align,
            className
          ],
          colSpan: isVertical ? span : span * 2 - 1,
          rowspan: isVertical ? rowspan * 2 - 1 : rowspan
        }, content), directives);
      default:
        return withDirectives(h("td", {
          style,
          class: [ns.e("cell"), align],
          colSpan: span,
          rowspan
        }, [
          !isNil(label) ? h("span", {
            class: [ns.e("label"), labelClassName]
          }, label) : void 0,
          h("span", {
            class: [ns.e("content"), className]
          }, content)
        ]), directives);
    }
  }
});
const descriptionsRowProps = buildProps({
  row: {
    type: definePropType(Array),
    default: () => []
  }
});
const __default__$1 = defineComponent({
  name: "ElDescriptionsRow"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: descriptionsRowProps,
  setup(__props) {
    const descriptions = inject(descriptionsKey, {});
    return (_ctx, _cache) => {
      return unref(descriptions).direction === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, _index) => {
            return openBlock(), createBlock(unref(ElDescriptionsCell), {
              key: `tr1-${_index}`,
              cell,
              tag: "th",
              type: "label"
            }, null, 8, ["cell"]);
          }), 128))
        ]),
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, _index) => {
            return openBlock(), createBlock(unref(ElDescriptionsCell), {
              key: `tr2-${_index}`,
              cell,
              tag: "td",
              type: "content"
            }, null, 8, ["cell"]);
          }), 128))
        ])
      ], 64)) : (openBlock(), createElementBlock("tr", { key: 1 }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, _index) => {
          return openBlock(), createElementBlock(Fragment, {
            key: `tr3-${_index}`
          }, [
            unref(descriptions).border ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(unref(ElDescriptionsCell), {
                cell,
                tag: "td",
                type: "label"
              }, null, 8, ["cell"]),
              createVNode(unref(ElDescriptionsCell), {
                cell,
                tag: "td",
                type: "content"
              }, null, 8, ["cell"])
            ], 64)) : (openBlock(), createBlock(unref(ElDescriptionsCell), {
              key: 1,
              cell,
              tag: "td",
              type: "both"
            }, null, 8, ["cell"]))
          ], 64);
        }), 128))
      ]));
    };
  }
});
var ElDescriptionsRow = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "descriptions-row.vue"]]);
const descriptionProps = buildProps({
  border: Boolean,
  column: {
    type: Number,
    default: 3
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  size: useSizeProp,
  title: {
    type: String,
    default: ""
  },
  extra: {
    type: String,
    default: ""
  }
});
const __default__ = defineComponent({
  name: "ElDescriptions"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: descriptionProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("descriptions");
    const descriptionsSize = useFormSize();
    const slots = useSlots();
    provide(descriptionsKey, props);
    const descriptionKls = computed(() => [ns.b(), ns.m(descriptionsSize.value)]);
    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        node.props.span = span;
      }
      return node;
    };
    const getRows = () => {
      if (!slots.default)
        return [];
      const children = flattedChildren(slots.default()).filter((node) => {
        var _a;
        return ((_a = node == null ? void 0 : node.type) == null ? void 0 : _a.name) === "ElDescriptionsItem";
      });
      const rows = [];
      let temp = [];
      let count = props.column;
      let totalSpan = 0;
      const rowspanTemp = [];
      children.forEach((node, index) => {
        var _a, _b, _c;
        const span = ((_a = node.props) == null ? void 0 : _a.span) || 1;
        const rowspan = ((_b = node.props) == null ? void 0 : _b.rowspan) || 1;
        const rowNo = rows.length;
        rowspanTemp[rowNo] || (rowspanTemp[rowNo] = 0);
        if (rowspan > 1) {
          for (let i = 1; i < rowspan; i++) {
            rowspanTemp[_c = rowNo + i] || (rowspanTemp[_c] = 0);
            rowspanTemp[rowNo + i]++;
            totalSpan++;
          }
        }
        if (rowspanTemp[rowNo] > 0) {
          count -= rowspanTemp[rowNo];
          rowspanTemp[rowNo] = 0;
        }
        if (index < children.length - 1) {
          totalSpan += span > count ? count : span;
        }
        if (index === children.length - 1) {
          const lastSpan = props.column - totalSpan % props.column;
          temp.push(filledNode(node, lastSpan, count, true));
          rows.push(temp);
          return;
        }
        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(filledNode(node, span, count));
          rows.push(temp);
          count = props.column;
          temp = [];
        }
      });
      return rows;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(descriptionKls))
      }, [
        _ctx.title || _ctx.extra || _ctx.$slots.title || _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("title"))
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("extra"))
          }, [
            renderSlot(_ctx.$slots, "extra", {}, () => [
              createTextVNode(toDisplayString(_ctx.extra), 1)
            ])
          ], 2)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("body"))
        }, [
          createElementVNode("table", {
            class: normalizeClass([unref(ns).e("table"), unref(ns).is("bordered", _ctx.border)])
          }, [
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(getRows(), (row, _index) => {
                return openBlock(), createBlock(ElDescriptionsRow, {
                  key: _index,
                  row
                }, null, 8, ["row"]);
              }), 128))
            ])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var Descriptions = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "description.vue"]]);
const descriptionItemProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  span: {
    type: Number,
    default: 1
  },
  rowspan: {
    type: Number,
    default: 1
  },
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  align: {
    type: String,
    default: "left"
  },
  labelAlign: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  },
  labelClassName: {
    type: String,
    default: ""
  }
});
const DescriptionItem = defineComponent({
  name: "ElDescriptionsItem",
  props: descriptionItemProps
});
const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem: DescriptionItem
});
const ElDescriptionsItem = withNoopInstall(DescriptionItem);
const _sfc_main = {
  __name: "[workNo]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { loading } = useGlobal();
    const workNo = route.params.workNo;
    const detail = ref({});
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/GetVerifyDetail", {
      onRequest({ request, options }) {
        loading.value = true;
      },
      onRequestError({ request, options, error }) {
      },
      onResponse({ response }) {
        loading.value = false;
        return response._data;
      },
      onResponseError({ request, response, options }) {
      },
      params: {
        workNo
      }
    }, "$padPVS2VL2")), __temp = await __temp, __restore(), __temp);
    detail.value = data.value.data.detail;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_descriptions = ElDescriptions;
      const _component_el_descriptions_item = ElDescriptionsItem;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_descriptions, {
        title: "Descriptions \u63CF\u8FF0\u5217\u8868",
        column: 2,
        border: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_descriptions_item, { label: "\u7533\u8ACB No." }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(detail).work_No)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(detail).work_No), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_descriptions_item, { label: "\u5BE9\u6838\u72C0\u614B" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span style="${ssrRenderStyle({ "color": "#006bb2" })}"${_scopeId2}>\u7B49\u5F85\u5BE9\u6838</span>`);
                } else {
                  return [
                    createVNode("span", { style: { "color": "#006bb2" } }, "\u7B49\u5F85\u5BE9\u6838")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_descriptions_item, { label: "\u516C\u53F8\u5168\u7A31" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(detail).s_Name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(detail).s_Name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_descriptions_item, { label: "\u516C\u53F8\u7C21\u7A31" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(detail).short_Name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(detail).short_Name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_descriptions_item, { label: "\u5D4C\u5957\u5F0F\u8DEF\u7531\u6E2C\u8A66" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_descriptions_item, { label: "\u7533\u8ACB No." }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(detail).work_No), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_descriptions_item, { label: "\u5BE9\u6838\u72C0\u614B" }, {
                default: withCtx(() => [
                  createVNode("span", { style: { "color": "#006bb2" } }, "\u7B49\u5F85\u5BE9\u6838")
                ]),
                _: 1
              }),
              createVNode(_component_el_descriptions_item, { label: "\u516C\u53F8\u5168\u7A31" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(detail).s_Name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_descriptions_item, { label: "\u516C\u53F8\u7C21\u7A31" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(detail).short_Name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_descriptions_item, { label: "\u5D4C\u5957\u5F0F\u8DEF\u7531\u6E2C\u8A66" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify/[workNo].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_workNo_-Dzku-Dpm.mjs.map
