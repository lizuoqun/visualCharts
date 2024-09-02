# 代码雨

<br/>

<mCodeRain duration="100" text="君不见黄河之水天上来奔流到海不复回" colWidth="48" fontSize="48"/>

::: code-group

```html [html]
<mCodeRain duration="100" text="君不见黄河之水天上来奔流到海不复回" colWidth="48" fontSize="48"/>
```

:::

## API

### 属性

| 属性名      | 描述                      | 类型     | 默认            |
|----------|-------------------------|--------|---------------|
| duration | 刷新动画的间隔，单位为毫秒，值越小运动速度越快 | number | 50            |
| text     | 显示的文本（从里面取随机字符）         | string | 'Hello World' |
| colWidth | 每列的宽度，单位为百分比            | number | 16            |
| colors   | 颜色列表，默认为随机颜色            | Array  | ['#45b787']   |
| fontSize | 字体大小，单位为px              | number | 16            |
