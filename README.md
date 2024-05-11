# visualCharts

VisualCharts https://visualcharts.vercel.app/

## 代码层级说明

| 目录      | 子目录（文件）       | 说明             |
|---------|---------------|----------------|
| build   | lib.config.js | 将源代码编译成库文件     |
| docs    |               | vitepress 文档   |
| package |               |                |
|         | dataV         | vue3实现的dataV组件 |

## 发布流程

- 先执行命令 `npm run build:components` 将组件编译成库文件
- 执行命令 `npm login` 登录npm （可能会因为网络延迟导致失败，可以尝试多次）
- 修改`package.json`中的`version`
- 执行命令 `npm publish` 发布