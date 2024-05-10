import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './tailwind.postcss'
import './global.css'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.use(ElementPlus)
        // 注册所有图标
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}
