import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
const _hoisted_1 = { id: "titleComponent" };
const _hoisted_2 = { class: "m-title__inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "title1",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, toDisplayString(__props.title), 1)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=title1.vue2.js.map
