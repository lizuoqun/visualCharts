import { defineComponent, ref, onMounted, openBlock, createElementBlock, unref, createElementVNode, renderSlot, pushScopeId, popScopeId } from "vue";
const _withScopeId = (n) => (pushScopeId("data-v-48d8ae24"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["d"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("radialGradient", {
  id: "border-box-8-gradient-datav_uuid1",
  cx: "50%",
  cy: "50%",
  r: "50%"
}, [
  /* @__PURE__ */ createElementVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }),
  /* @__PURE__ */ createElementVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  })
], -1));
const _hoisted_4 = { id: "border-box-8-mask-datav_uuid1" };
const _hoisted_5 = {
  cx: "0",
  cy: "0",
  r: "150",
  fill: "url(#border-box-8-gradient-datav_uuid1)"
};
const _hoisted_6 = ["path"];
const _hoisted_7 = ["points"];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("use", {
  stroke: "#235fa7",
  "stroke-width": "1",
  "xlink:href": "#border-box-8-path-datav_uuid1"
}, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("use", {
  stroke: "#4fd2dd",
  "stroke-width": "3",
  "xlink:href": "#border-box-8-path-datav_uuid1",
  mask: "url(#border-box-8-mask-datav_uuid1)"
}, [
  /* @__PURE__ */ createElementVNode("animate", {
    attributeName: "stroke-dasharray",
    from: "0, 0",
    to: "0, 0",
    dur: "3s",
    repeatCount: "indefinite"
  })
], -1));
const _hoisted_10 = { class: "m_border_box8__slot" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BorderBox8",
  props: {
    reverse: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const BorderBox8 = ref(null);
    let width = ref(0);
    let height = ref(0);
    const pathD = ref("");
    onMounted(() => {
      width.value = BorderBox8.value.offsetWidth;
      height.value = BorderBox8.value.offsetHeight;
      pathD.value = props.reverse ? `M2.5, 2.5 L${width.value - 2.5}, 2.5 L${width.value - 2.5}, ${height.value - 2.5} L2.5, ${height.value - 2.5} L2.5, 2.5` : `M 2.5, 2.5 L 2.5, ${height.value - 2.5} L ${width.value - 2.5}, ${height.value - 2.5} L ${width.value - 2.5}, 2.5 L 2.5, 2.5`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "BorderBox8",
        ref: BorderBox8,
        class: "m_border_box8"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "m_border_box8_svg",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("path", {
              id: "border-box-8-path-datav_uuid1",
              d: pathD.value,
              fill: "transparent"
            }, null, 8, _hoisted_2),
            _hoisted_3,
            createElementVNode("mask", _hoisted_4, [
              createElementVNode("circle", _hoisted_5, [
                createElementVNode("animateMotion", {
                  dur: "3s",
                  path: pathD.value,
                  rotate: "auto",
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_6)
              ])
            ])
          ]),
          createElementVNode("polygon", {
            fill: "transparent",
            points: `5, 5 ${unref(width) - 5}, 5 ${unref(width) - 5} ${unref(height) - 5} 5, ${unref(height) - 5}`
          }, null, 8, _hoisted_7),
          _hoisted_8,
          _hoisted_9
        ], 8, _hoisted_1)),
        createElementVNode("div", _hoisted_10, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=BorderBox8.vue2.js.map
