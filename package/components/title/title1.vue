<!-- 组件 -->
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div id="titleComponent">
    <div class="m-title__inner">{{ title }}</div>
  </div>
</template>

<style scoped>
#titleComponent {
  height: 30px;
  background-image: linear-gradient(90deg, rgba(67, 205, 255, 0.4) 0%, rgba(35, 167, 255, 0) 98%);
  margin-left: 10px;
  width: 50%;
  display: flex;
  align-items: center;
}

#titleComponent::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 30px;
  margin-left: -10px;
  background-color: #23D3FF;
}

.m-title__inner {
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
  height: 30px;
  line-height: 30px;
}
</style>
