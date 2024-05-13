import BorderBox8 from './dataV/BorderBox/BorderBox8.vue';
import Decoration5 from './dataV/Decoration/Decoration5.vue';
import Turntable from './echart/pie/turntable.vue';

// export default (app: { component: (arg0: string, arg1: any) => void; }) => {
//   app.component('BorderBox8', BorderBox8);
//   app.component('Decoration5', Decoration5);
// }

export const myPlugin = {
  install(app) {
    app.component('BorderBox8', BorderBox8);
    app.component('Decoration5', Decoration5);
    app.component('Turntable', Turntable);
  }
};