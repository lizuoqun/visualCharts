<!-- 组件 -->
<script setup lang="ts">

</script>

<template>
  <div class="m-text2">江畔何人初见月，江月何年初照人</div>
</template>

<style scoped>
.m-text2::before {
  content: '';
  height: 4px;
  background: red;
  /* 伪元素默认样式 display: inline;所以需要转成inline-block宽高才会生效 */
  display: inline-block;
  /* 通过定位使下划线在最低层 */
  position: absolute;
  top: 40px;
  width: 0;
  /* 加上一个过渡效果，使之丝滑一些 */
  transition: width .76s;
}

.m-text2:hover::before {
  /* 悬浮时候，让下划线伪元素宽度变成100%即可出现效果 */
  width: 100%;
}
</style>
