import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import {visualCharts} from 'visual-chart';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import './tailwind.postcss';
import './global.css';
import 'visual-chart/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(ElementPlus);
    app.use(visualCharts);
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
