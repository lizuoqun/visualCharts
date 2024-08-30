import BorderBox8 from './dataV/BorderBox/BorderBox8.vue';
import Decoration5 from './dataV/Decoration/Decoration5.vue';
import Title1 from './title/title1.vue';
import CodeRain from './bg/code-rain.vue';

// export default (app: { component: (arg0: string, arg1: any) => void; }) => {
//   app.component('BorderBox8', BorderBox8);
//   app.component('Decoration5', Decoration5);
// }

export const visualCharts = {
  install(app: { component: (arg0: string, arg1: any) => void; }) {
    app.component('mBorderBox8', BorderBox8);
    app.component('mDecoration5', Decoration5);
    app.component('mTitle1', Title1);
    app.component('mCodeRain', CodeRain);
  }
};