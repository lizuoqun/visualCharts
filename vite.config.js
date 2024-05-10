import {defineConfig} from 'vite';

const path = require('path');
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        //别名配置
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      rollupOptions: {
        // 按照依赖进行分包
        manualChunks: {
          vue: ['vue'],
          element: ['element-plus']
        }
      }
    }
  };
});