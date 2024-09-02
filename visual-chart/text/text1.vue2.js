import { defineComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, toDisplayString } from "vue";
const _hoisted_1 = { class: "m-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text1",
  props: {
    title: {
      type: String,
      default: "Hello Vue3!"
    },
    width: {
      type: String,
      default: "800px"
    },
    height: {
      type: String,
      default: "100px"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "m-box",
        style: normalizeStyle({ width: props.width, height: props.height })
      }, [
        createElementVNode("div", _hoisted_1, toDisplayString(props.title), 1)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=text1.vue2.js.map
