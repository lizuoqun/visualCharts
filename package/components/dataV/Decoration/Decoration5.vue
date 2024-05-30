<!--
    标题组件
    在vue3当中使用到dataV的时候需要去修改依赖当中的package.json文件当中的 "module": "./es/index.mjs",
    直接把这个组件的代码拿出来放在这里当一个自有组件
 -->
<template>
  <div class="m_decoration5_box">
    <svg width="2048" height="95">
      <polyline fill="transparent" stroke="#3f96a5" stroke-width="3"
                points="0,19 368.64,19 409.6,38 512,38 552.96,57 1474.56,57 1536,38 1638.4,38 1679.36,19 2048,19">
        <animate attributeName="stroke-dasharray" attributeType="XML"
                 from="0, 1031.7236862494651, 0, 1031.7236862494651" to="0, 0, 2063.4473724989302, 0" dur="1.2s"
                 begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98"
                 repeatCount="indefinite"></animate>
      </polyline>
      <polyline fill="transparent" stroke="#3f96a5" stroke-width="2" points="614.4,76 1433.6,76">
        <animate attributeName="stroke-dasharray" attributeType="XML"
                 from="0, 409.59999999999997, 0, 409.59999999999997" to="0, 0, 819.1999999999999, 0" dur="1.2s"
                 begin="0s" calcMode="spline" keyTimes="0;1" keySplines=".4,1,.49,.98"
                 repeatCount="indefinite"></animate>
      </polyline>
    </svg>
  </div>
</template>
<style scoped>
.m_decoration5_box {
  width: 100%;
  height: 100%;
}
</style>