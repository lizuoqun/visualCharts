<template>
  <div>
    <mDecoration5 style="width: 100%; height: 100px"/>
    <mBorderBox8 style="width: 50%; height: 300px" :reverse="false"/>
    <mTurntable style="width: 300px; height: 300px" class="turn" :option="option"/>
    <mTitle1 title="标题"/>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';

const data = reactive([
  {
    name: 'A',
    value: 1
  },
  {
    name: 'B',
    value: 1
  },
  {
    name: 'C',
    value: 1
  },
  {
    name: 'D',
    value: 1
  },
  {
    name: 'F',
    value: 1
  }
]);
const option = ref({
  color: [
    'rgba(26, 232, 53, 1)',
    'rgba(255, 195, 0, 1)',
    'rgba(166, 166, 166, 1)',
    'rgba(25, 131, 252, 1)',
    'rgba(255, 43, 43, 1)'
  ],
  series: [
    {
      radius: ['0%', '50%'],
      center: ['50%', '50%'],
      type: 'pie',
      name: '',
      data: data
    }
  ]
});

setInterval(() => {
  // 模拟改变数据
  data.forEach(item => {
    item.value = Number((Math.random() * 10).toFixed(0));
  });
  option.value.series[0].data = data;
}, 5000);

</script>
<style>
html, body {
  overflow: hidden;
}
</style>