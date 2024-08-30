import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
// 全局注册组件
// import visualCharts from '../package/components';
import {visualCharts} from '../package/components';

const app = createApp(App);
// app.use(visualCharts);
app.use(visualCharts);
app.mount('#app');
