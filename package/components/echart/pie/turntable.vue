<!--左侧 浮标数量统计 饼图 组件 -->
<script setup lang="ts">
import * as echarts from 'echarts';
import {ref, onMounted} from 'vue';

const chartEle = ref(null);

const data = [
  {
    name: '1',
    value: 1
  },
  {
    name: '非工作状态',
    value: 1
  },
  {
    name: '自毁状态',
    value: 1
  },
  {
    name: '工作状态',
    value: 1
  },
  {
    name: '报警状态',
    value: 1
  }
];

let option = {
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
};


onMounted(() => {
  drawChart();
});

function drawChart() {
  const myChart = echarts.init(chartEle.value, 'light');
  myChart.setOption(option);
}
</script>

<template>
  <div ref="chartEle"/>
</template>

