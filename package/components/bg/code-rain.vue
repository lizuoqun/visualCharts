<!-- 组件 -->
<script setup lang="ts">
import {onMounted, nextTick} from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Hello Vue3!'
  },
  duration: {
    type: Number,
    default: 40
  },
  colors: {
    type: Array<string>,
    default: () => {
      return ['#45b787'];
    }
  },
  colWidth: {
    type: Number,
    default: 16
  },
  fontSize: {
    type: Number,
    default: 16
  }
});

onMounted(() => {
  nextTick(() => {

    const bg = document.getElementById('bg') as HTMLCanvasElement;

    const width = window.innerWidth - 3;
    const height = window.innerHeight - 5;

    bg.width = width;
    bg.height = height;

    const ctx = bg.getContext('2d');
    ctx.fillStyle = 'rgba(1,1,1,0.9)';

    const colCount = Math.floor(width / props.colWidth);
    const colNextIndex = new Array(colCount);

    colNextIndex.fill(1);
    console.log(colNextIndex);

    function draw() {
      ctx.fillStyle = 'rgba(1,1,1,0.1)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = getColor();
      ctx.font = `${props.fontSize}px "FangSong"`;
      for (let i = 0; i < colCount; i++) {
        const x = i * props.colWidth;
        const y = props.fontSize * colNextIndex[i];
        ctx.fillText(getFont(), x, y);
        if (y > height && Math.random() > 0.95) {
          colNextIndex[i] = 0;
        } else {
          colNextIndex[i]++;
        }
      }
    }

    function getColor() {
      return props.colors[Math.floor(Math.random() * props.colors.length)];
    }

    function getFont() {
      return props.text[Math.floor(Math.random() * props.text.length)];
    }

    draw();
    setInterval(draw, props.duration);

  });
});


</script>

<template>
  <canvas id="bg" style="width: 100%;height: 100%"/>
</template>