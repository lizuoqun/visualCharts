<!-- 组件 -->
<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: 'Hello Vue3!'
  },
  width: {
    type: String,
    default: '800px'
  },
  height: {
    type: String,
    default: '100px'
  }
});
</script>

<template>
  <div class="m-box" :style="{width: props.width, height: props.height}">
    <div class="m-text">
      {{ props.title }}
    </div>
  </div>
</template>

<style scoped>

.m-box {
  background: linear-gradient(to right, #ccc, #fff, #ddd, #fff, #ddd, #fff, #ccc);
  display: flex;
  align-items: center;
  justify-content: center;
}

.m-text {
  color: #000;
  font-family: '宋徽宗瘦金体', 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  font-size: 40px;
  text-shadow: 1px -1px #fff, -1px 1px #999, -5px 5px 5px #808080;
}
</style>
