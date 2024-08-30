import { defineComponent, onMounted, nextTick, openBlock, createElementBlock } from "vue";
const _hoisted_1 = {
  id: "bg",
  style: { "width": "100%", "height": "100%" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "code-rain",
  props: {
    text: {
      type: String,
      default: "Hello Vue3!"
    },
    duration: {
      type: Number,
      default: 40
    },
    colors: {
      type: Array,
      default: () => {
        return ["#45b787"];
      }
    },
    colWidth: {
      type: Number,
      default: 15
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      nextTick(() => {
        const bg = document.getElementById("bg");
        const width = window.innerWidth - 3;
        const height = window.innerHeight - 5;
        bg.width = width;
        bg.height = height;
        const ctx = bg.getContext("2d");
        ctx.fillStyle = "rgba(1,1,1,0.9)";
        const colCount = Math.floor(width / props.colWidth);
        const colNextIndex = new Array(colCount);
        colNextIndex.fill(1);
        console.log(colNextIndex);
        function draw() {
          ctx.fillStyle = "rgba(1,1,1,0.1)";
          ctx.fillRect(0, 0, width, height);
          const fz = 15;
          ctx.fillStyle = getColor();
          ctx.font = `${fz}px "FangSong"`;
          for (let i = 0; i < colCount; i++) {
            const x = i * props.colWidth;
            const y = fz * colNextIndex[i];
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("canvas", _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=code-rain.vue.js.map
