# 项目说明

这个项目是基于vue3来做的一些简单、常用的前端组件。

主要来说一下打包过程

## 1. 项目初始化

这个没啥，就创建好一个vue3+ts的前端项目就好了

## 2、将组件打包

在根目录下有写一个vite.config.components.ts文件，用来打包组件。

组件打包完成之后会生成一个visual-chart文件夹，里面包含了打包后的组件。

## 3、将组件发布到npm

xxx

## 4、将组件引入到项目中

xxx

## 5、在press中使用组件

这里先对组件进行安装，如果是没有发布到npm的，可以用以下命令安装本地依赖

```shell
npm install visual-chart ./visual-chart
```

在`.vitepress/theme/index.ts`当中进行引入组件进行全局注册，之后就可以在md当中使用组件了。