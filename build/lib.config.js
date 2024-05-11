/**
 * 打包配置
 * */
import {defineConfig} from 'vite';
import {resolve} from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/]
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, '../src/main.ts'),
      name: 'VisualCharts',
      fileName: (format) => `visual-charts.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});