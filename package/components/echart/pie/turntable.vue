<!--左侧 浮标数量统计 饼图 组件 -->
<script setup lang="ts">
import * as echarts from 'echarts';
import {ref, onMounted, watch} from 'vue';

const prop = defineProps({
  option: {
    type: Object,
    default: () => {
    }
  }
});

const chartEle = ref(null);

watch(() => prop.option, (newVal, oldVal) => {
  myChart.setOption(prop.option);
}, {deep: true});

onMounted(() => {
  drawChart();
});

let myChart = null;

function drawChart() {
  myChart = echarts.init(chartEle.value, 'light');
  myChart.setOption(prop.option);
}
</script>

<template>
  <div ref="chartEle"/>
</template>

