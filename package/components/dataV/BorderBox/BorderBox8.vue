<!-- dataView vue3 组件 -->
<template>
  <div ref="BorderBox8" class="m_border_box8">
    <svg class="m_border_box8_svg" :width="width" :height="height">
      <defs>
        <path id="border-box-8-path-datav_uuid1" :d="pathD"
              fill="transparent"></path>
        <radialGradient id="border-box-8-gradient-datav_uuid1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask id="border-box-8-mask-datav_uuid1">
          <circle cx="0" cy="0" r="150" fill="url(#border-box-8-gradient-datav_uuid1)">
            <animateMotion dur="3s" :path="pathD" rotate="auto"
                           repeatCount="indefinite"></animateMotion>
          </circle>
        </mask>
      </defs>
      <polygon fill="transparent"
               :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`"></polygon>
      <use stroke="#235fa7" stroke-width="1" xlink:href="#border-box-8-path-datav_uuid1"></use>
      <use stroke="#4fd2dd" stroke-width="3" xlink:href="#border-box-8-path-datav_uuid1"
           mask="url(#border-box-8-mask-datav_uuid1)">
        <animate attributeName="stroke-dasharray" from="0, 0" to="0, 0" dur="3s" repeatCount="indefinite"></animate>
      </use>
    </svg>
    <div class="m_border_box8__slot">
      <slot><!----></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';

const props = defineProps({
  reverse: {
    type: Boolean,
    default: true
  }
});
/**
 * 打了注释的都需要重新计算
 * vue2版本源码见 https://github.com/DataV-Team/DataV/blob/master/src/components/borderBox8/src/main.vue
 * */
const BorderBox8 = ref(null);

let width = ref(0);
let height = ref(0);
const pathD = ref('');

onMounted(() => {
  width.value = BorderBox8.value.offsetWidth;
  height.value = BorderBox8.value.offsetHeight;
  pathD.value = props.reverse ? `M2.5, 2.5 L${width.value - 2.5}, 2.5 L${width.value - 2.5}, ${height.value - 2.5} L2.5, ${height.value - 2.5} L2.5, 2.5` : `M 2.5, 2.5 L 2.5, ${height.value - 2.5} L ${width.value - 2.5}, ${height.value - 2.5} L ${width.value - 2.5}, 2.5 L 2.5, 2.5`;
});
</script>

<style scoped>
.m_border_box8 {
  position: relative;
  width: 100%;
  height: 100%;
}

.m_border_box8_svg{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.m_border_box8__slot {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>