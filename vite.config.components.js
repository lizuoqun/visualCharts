import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

export default defineConfig({
	build: {
		emptyOutDir: true,
		target: 'modules',
		outDir: 'es',
		minify: false,
		sourcemap: true,
		cssCodeSplit: false,
		rollupOptions: {
			external: ['vue'],
			input: ['/package/components/index.ts'],
			output: [
				{
					format: 'es',
					entryFileNames: '[name].js',
					preserveModules: true,
					dir: 'visual-chart',
					preserveModulesRoot: 'src'
				}
			]
		},
		lib: {
			entry: path.resolve(__dirname, "'components/index.ts'"),
			name: 'visualChart',
			formats: ['es', 'cjs']
		}
	},
	resolve: {
		alias: { '@': resolve(__dirname, 'package') } // 配置项目别名
	},
	css: {
		preprocessorOptions: {
		}
	},
	plugins: [vue()]
})
