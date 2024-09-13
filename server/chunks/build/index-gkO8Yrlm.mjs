import { E as ElTable, a as ElTableColumn, c as ElTag, b as ElPagination } from './el-select-BQWz2td2.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DTNfuNCQ.mjs';
import { v as document_default, x as ElIcon } from './server.mjs';
import { u as useGlobal } from './useGlobal-8MrFQx0w.mjs';
import { ref, computed, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-dr1VWunK.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'lodash-unified';
import './el-popper-ChjsU9Zo.mjs';
import '@vueuse/core';
import '@popperjs/core';
import './use-form-item-JZbtd8a8.mjs';
import './use-form-common-props-C7qPbkPW.mjs';
import '@vue/shared';
import './index-CtGaUDm6.mjs';
import 'normalize-wheel-es';
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
  async setup(__props) {
    let __temp, __restore;
    const { loading } = useGlobal();
    const currentPage = ref(1);
    const pageSize = ref(10);
    const verifyList = ref([]);
    const tableData = computed(() => {
      const data = JSON.parse(JSON.stringify(verifyList.value));
      data.forEach((e, index) => {
        e.index = index + 1;
        e.company = `${e.s_Name} (${e.tel}) ${e.s_Id}`;
        e.applier = `${e.apply_Date}(${e.apply_Name})`;
        e.censorer = `${e.approve_date2}(${e.approve_Name})`;
        e.status = "\u7B49\u5F85\u5BE9\u6838";
      });
      const current = (currentPage.value - 1) * pageSize.value;
      const last = currentPage.value * pageSize.value;
      return data.slice(current, last);
    });
    const currentChangeHandler = (page) => {
      currentPage.value = page;
    };
    const { data: verifyListRes } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/GetVerifyList", {
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
      }
    }, "$poHhKVx4AZ")), __temp = await __temp, __restore(), __temp);
    verifyList.value = verifyListRes.value.data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_tag = ElTag;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_icon = ElIcon;
      const _component_el_pagination = ElPagination;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_table, {
        style: { "margin-top": "20px" },
        data: unref(tableData),
        "table-layout": "auto",
        "row-key": "s_Id"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "index",
              label: "\u9805\u6B21"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "company",
              label: "\u516C\u53F8\u5168\u7A31(\u7C21\u7A31)\u7D71\u4E00\u7DE8\u865F"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "applier",
              label: "\u7533\u8ACB\u65E5\u671F(\u7533\u8ACB\u8005)"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "censorer",
              label: "\u5BE9\u6838\u65E5\u671F(\u5BE9\u6838\u8005)"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "country",
              label: "\u516C\u53F8\u570B\u7C4D"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "status",
              label: "\u72C0\u614B"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_tag, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.status), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              width: "60",
              label: "\u64CD\u4F5C"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: `/verify/${row.work_No}`
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_icon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(document_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(document_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(unref(document_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: `/verify/${row.work_No}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(document_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                prop: "index",
                label: "\u9805\u6B21"
              }),
              createVNode(_component_el_table_column, {
                prop: "company",
                label: "\u516C\u53F8\u5168\u7A31(\u7C21\u7A31)\u7D71\u4E00\u7DE8\u865F"
              }),
              createVNode(_component_el_table_column, {
                prop: "applier",
                label: "\u7533\u8ACB\u65E5\u671F(\u7533\u8ACB\u8005)"
              }),
              createVNode(_component_el_table_column, {
                prop: "censorer",
                label: "\u5BE9\u6838\u65E5\u671F(\u5BE9\u6838\u8005)"
              }),
              createVNode(_component_el_table_column, {
                prop: "country",
                label: "\u516C\u53F8\u570B\u7C4D"
              }),
              createVNode(_component_el_table_column, {
                prop: "status",
                label: "\u72C0\u614B"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_el_tag, { type: "warning" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.status), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                width: "60",
                label: "\u64CD\u4F5C"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_NuxtLink, {
                    to: `/verify/${row.work_No}`
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(unref(document_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_pagination, {
        style: { "margin-top": "10px" },
        class: "card-list-pagination mt-4 mb-0",
        layout: "prev, pager, next, jumper",
        "page-size": unref(pageSize),
        total: unref(verifyList).length,
        "current-page": unref(currentPage),
        onCurrentChange: currentChangeHandler
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-gkO8Yrlm.mjs.map
