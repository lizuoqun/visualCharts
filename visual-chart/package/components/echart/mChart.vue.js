import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock } from "vue";
import "../../../node_modules/echarts/index.js";
import { init } from "../../../node_modules/echarts/lib/core/echarts.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mChart",
  props: {
    option: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const prop = __props;
    const chartEle = ref(null);
    watch(() => prop.option, (newVal, oldVal) => {
      myChart.setOption(prop.option);
    }, { deep: true });
    onMounted(() => {
      drawChart();
    });
    let myChart = null;
    function drawChart() {
      myChart = init(chartEle.value, "light");
      myChart.setOption(prop.option);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "chartEle",
        ref: chartEle
      }, null, 512);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=mChart.vue.js.map
