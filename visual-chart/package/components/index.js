import BorderBox8 from "./dataV/BorderBox/BorderBox8.vue.js";
import Decoration5 from "./dataV/Decoration/Decoration5.vue.js";
import _sfc_main from "./echart/mChart.vue.js";
import Title1 from "./title/title1.vue.js";
const visualCharts = {
  install(app) {
    app.component("mBorderBox8", BorderBox8);
    app.component("mDecoration5", Decoration5);
    app.component("mChart", _sfc_main);
    app.component("mTitle1", Title1);
  }
};
export {
  visualCharts
};
//# sourceMappingURL=index.js.map
