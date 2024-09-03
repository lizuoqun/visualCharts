<p align="center">
<img src="public/visual128.png" alt="mark text" width="128" height="128">
</p>

# visual-charts

## 文档说明

- [visual-charts 组件文档](http://122.51.159.230/visual-charts/)
- [visual-charts for gitee](https://gitee.com/modify_lzq/visualCharts.git)
- [visual-charts for github](https://github.com/lizuoqun/visualCharts.git)

## 启动流程
```cmd
npm install
npm run dev
```
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