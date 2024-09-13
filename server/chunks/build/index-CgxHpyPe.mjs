import { E as ElForm, a as ElFormItem } from './el-input-CSDIjYfb.mjs';
import { defineComponent, computed, provide, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, normalizeStyle, withCtx, renderSlot, inject, ref, withAsyncContext, mergeProps, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { b as buildProps, a as useNamespace, w as withInstall, d as definePropType, m as mutable, e as isNumber, c as _export_sfc$1, E as ElMessage } from './server.mjs';
import { isObject } from '@vue/shared';
import { E as ElInput } from './index-CtGaUDm6.mjs';
import { u as useHttp, E as ElButton } from './useHttp-CmezqO8G.mjs';
import { E as ElTable, a as ElTableColumn, b as ElPagination } from './el-select-BQWz2td2.mjs';
import { u as useGlobal } from './useGlobal-8MrFQx0w.mjs';
import { u as useFetch } from './fetch-dr1VWunK.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './use-form-common-props-C7qPbkPW.mjs';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
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
import './use-form-item-JZbtd8a8.mjs';
import '@ctrl/tinycolor';
import './el-popper-ChjsU9Zo.mjs';
import '@popperjs/core';
import 'normalize-wheel-es';

const rowContextKey = Symbol("rowContextKey");
const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];
const RowAlign = ["top", "middle", "bottom"];
const rowProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start"
  },
  align: {
    type: String,
    values: RowAlign
  }
});
const __default__$1 = defineComponent({
  name: "ElRow"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("row");
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style = computed(() => {
      const styles = {};
      if (!props.gutter) {
        return styles;
      }
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
      return styles;
    });
    const rowKls = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== "start"),
      ns.is(`align-${props.align}`, !!props.align)
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(rowKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "row.vue"]]);
const ElRow = withInstall(Row);
const colProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  sm: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  md: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  lg: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  xl: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  }
});
const __default__ = defineComponent({
  name: "ElCol"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const ns = useNamespace("col");
    const style = computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    const colKls = computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === "span")
            classes.push(ns.b(`${props[prop]}`));
          else if (size > 0)
            classes.push(ns.b(`${prop}-${props[prop]}`));
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (isNumber(props[size])) {
          classes.push(ns.b(`${size}-${props[size]}`));
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
          });
        }
      });
      if (gutter.value) {
        classes.push(ns.is("guttered"));
      }
      return [ns.b(), classes];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(colKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "col.vue"]]);
const ElCol = withInstall(Col);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { loading } = useGlobal();
    const isAdd = ref(true);
    const roomLists = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(2);
    const formRef = ref();
    const form = ref({
      room_No: "",
      description: "",
      max_Audience: 0,
      deleted: "0",
      room_Id: ""
    });
    const rules = ref({
      room_No: [{ required: true, message: "\u5FC5\u586B", trigger: "blur" }],
      description: [{ required: true, message: "\u5FC5\u586B", trigger: "blur" }]
    });
    const tableData = computed(() => {
      const data = JSON.parse(JSON.stringify(roomLists.value));
      const current = (currentPage.value - 1) * pageSize.value;
      const last = currentPage.value * pageSize.value;
      return data.slice(current, last);
    });
    const { data: getRoomsRes } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/GetRooms", {
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
    }, "$CjNEPcXlW3")), __temp = await __temp, __restore(), __temp);
    roomLists.value = getRoomsRes.value.data;
    const currentChangeHandler = (page) => {
      currentPage.value = page;
    };
    const addHandler = (formEl) => {
      if (!formEl)
        return;
      formEl.validate((valid) => {
        if (valid) {
          if (isAdd.value) {
            addRoom(form.value);
          } else {
            editRoom(form.value);
          }
        } else {
          ElMessage({
            message: "\u8CC7\u6599\u586B\u5BEB\u932F\u8AA4",
            type: "error",
            duration: 5e3,
            showClose: true
          });
        }
      });
    };
    const reset = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
      isAdd.value = true;
    };
    const edit = (item) => {
      form.value = { ...form.value, ...item };
      isAdd.value = false;
    };
    const deleteHandler = (item) => {
      updRoom(item);
    };
    const addRoom = async (formData) => {
      var _a;
      const AddRoomRes = await useHttp("/api/AddRoom", {
        method: "POST",
        body: formData
      });
      if (AddRoomRes.isOK) {
        const getRoomRes = await useHttp("/api/GetRooms", null, false);
        roomLists.value = getRoomRes == null ? void 0 : getRoomRes.data;
        currentPage.value = 1;
        (_a = formRef == null ? void 0 : formRef.value) == null ? void 0 : _a.resetFields();
      }
    };
    const editRoom = async (formData) => {
      var _a;
      const editRoomRes = await useHttp("/api/EditRoom", {
        method: "POST",
        body: formData
      });
      if (editRoomRes.isOK) {
        const getRoomRes = await useHttp("/api/GetRooms", null, false);
        roomLists.value = getRoomRes == null ? void 0 : getRoomRes.data;
        (_a = formRef == null ? void 0 : formRef.value) == null ? void 0 : _a.resetFields();
      }
    };
    const updRoom = async (formData) => {
      const delRoomRes = await useHttp("/api/DelRoom", {
        method: "POST",
        body: formData
      });
      if (delRoomRes.isOK) {
        const getRoomRes = await useHttp("/api/GetRooms", null, false);
        roomLists.value = getRoomRes == null ? void 0 : getRoomRes.data;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_pagination = ElPagination;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "15px" } }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        "label-position": "top",
        "require-asterisk-position": "right",
        "scroll-to-error": "",
        model: unref(form),
        rules: unref(rules)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_col, { span: 6 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_form_item, {
                          label: "\u6559\u5BA4\u7DE8\u865F",
                          prop: "room_No"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: unref(form).room_No,
                                "onUpdate:modelValue": ($event) => unref(form).room_No = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: unref(form).room_No,
                                  "onUpdate:modelValue": ($event) => unref(form).room_No = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_form_item, {
                            label: "\u6559\u5BA4\u7DE8\u865F",
                            prop: "room_No"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(form).room_No,
                                "onUpdate:modelValue": ($event) => unref(form).room_No = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_col, { span: 6 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_form_item, {
                          label: "\u5EE0\u5340\u4EE3\u865F+\u6559\u5BA4\u540D\u7A31",
                          prop: "description"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: unref(form).description,
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_form_item, {
                            label: "\u5EE0\u5340\u4EE3\u865F+\u6559\u5BA4\u540D\u7A31",
                            prop: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_col, { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "\u6559\u5BA4\u7DE8\u865F",
                          prop: "room_No"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(form).room_No,
                              "onUpdate:modelValue": ($event) => unref(form).room_No = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "\u5EE0\u5340\u4EE3\u865F+\u6559\u5BA4\u540D\u7A31",
                          prop: "description"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_row, { gutter: 20 }, {
                default: withCtx(() => [
                  createVNode(_component_el_col, { span: 6 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "\u6559\u5BA4\u7DE8\u865F",
                        prop: "room_No"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).room_No,
                            "onUpdate:modelValue": ($event) => unref(form).room_No = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, { span: 6 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "\u5EE0\u5340\u4EE3\u865F+\u6559\u5BA4\u540D\u7A31",
                        prop: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        plain: "",
        onClick: ($event) => addHandler(unref(formRef))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isAdd) ? "\u65B0\u589E" : "\u4FEE\u6539")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isAdd) ? "\u65B0\u589E" : "\u4FEE\u6539"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        plain: "",
        onClick: ($event) => reset(unref(formRef))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6E05\u9664`);
          } else {
            return [
              createTextVNode("\u6E05\u9664")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_table, {
        style: { "margin-top": "20px" },
        data: unref(tableData),
        "table-layout": "auto",
        "row-key": "room_Id"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "room_Id",
              label: "room_Id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "room_No",
              label: "room_No"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "description",
              label: "description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              width: "60",
              label: "Views"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="btn-group" style="${ssrRenderStyle({ "display": "flex" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    size: "small",
                    type: "primary",
                    onClick: ($event) => edit(row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u4FEE\u6539`);
                      } else {
                        return [
                          createTextVNode("\u4FEE\u6539")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    size: "small",
                    type: "danger",
                    onClick: ($event) => deleteHandler(row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u522A\u9664`);
                      } else {
                        return [
                          createTextVNode("\u522A\u9664")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "btn-group",
                      style: { "display": "flex" }
                    }, [
                      createVNode(_component_el_button, {
                        size: "small",
                        type: "primary",
                        onClick: ($event) => edit(row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4FEE\u6539")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_el_button, {
                        size: "small",
                        type: "danger",
                        onClick: ($event) => deleteHandler(row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u522A\u9664")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                prop: "room_Id",
                label: "room_Id"
              }),
              createVNode(_component_el_table_column, {
                prop: "room_No",
                label: "room_No"
              }),
              createVNode(_component_el_table_column, {
                prop: "description",
                label: "description"
              }),
              createVNode(_component_el_table_column, {
                width: "60",
                label: "Views"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", {
                    class: "btn-group",
                    style: { "display": "flex" }
                  }, [
                    createVNode(_component_el_button, {
                      size: "small",
                      type: "primary",
                      onClick: ($event) => edit(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4FEE\u6539")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_button, {
                      size: "small",
                      type: "danger",
                      onClick: ($event) => deleteHandler(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u522A\u9664")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
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
        total: unref(roomLists).length,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CgxHpyPe.mjs.map
