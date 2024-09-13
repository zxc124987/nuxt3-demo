import { inject, ref, computed, watch, unref } from 'vue';
import { b as buildProps } from './server.mjs';
import { pick } from 'lodash-unified';
import { f as formContextKey, a as formItemContextKey } from './use-form-common-props-C7qPbkPW.mjs';

const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  const isLabeledByFormItem = computed(() => {
    var _a;
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};

export { CHANGE_EVENT as C, UPDATE_MODEL_EVENT as U, useDeprecated as a, useFormItem as b, useFormItemInputId as c, useAriaProps as u };
//# sourceMappingURL=use-form-item-JZbtd8a8.mjs.map
