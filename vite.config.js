import {defineConfig} from 'vite';

import path from 'path';
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
        },
        minify: 'terser'
      }
    },
    server: {
      host: '0.0.0.0',
      port: 2018,
      open: true
    }
  };
});