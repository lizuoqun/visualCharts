<template>
  <div>
    <Decoration5 style="width: 100%; height: 100px"/>
    <BorderBox8 style="width: 50%; height: 300px" :reverse="false"/>
    <mTurntable style="width: 300px; height: 300px" class="turn"/>
    <mTitle1 title="标题"/>
  </div>
</template>

<script setup lang="ts">

</script>
<style>
html, body {
  overflow: hidden;
}

.turn {
  animation: circle 1s linear;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>