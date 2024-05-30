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
  <div id="titleComponent" class="pl-3 w-1/2 flex items-center">
    <div class="ml-2 font-bold text-[18px]">{{ title }}</div>
  </div>
</template>

<style scoped>
#titleComponent {
  height: 30px;
  background-image: linear-gradient(90deg, rgba(67, 205, 255, 0.4) 0%, rgba(35, 167, 255, 0) 98%);
}

#titleComponent::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 30px;
  margin-left: -10px;
  background-color: #23D3FF;
}
</style>
