import BorderBox8 from "./dataV/BorderBox/BorderBox8.vue.js";
import Decoration5 from "./dataV/Decoration/Decoration5.vue.js";
import Title1 from "./title/title1.vue.js";
import _sfc_main from "./bg/code-rain.vue.js";
import Text1 from "./text/text1.vue.js";
import Text2 from "./text/text2.vue.js";
const visualCharts = {
  install(app) {
    app.component("mBorderBox8", BorderBox8);
    app.component("mDecoration5", Decoration5);
    app.component("mTitle1", Title1);
    app.component("mCodeRain", _sfc_main);
    app.component("mText1", Text1);
    app.component("mText2", Text2);
  }
};
export {
  visualCharts
};
//# sourceMappingURL=index.js.map
