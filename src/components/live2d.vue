<template>
  <!-- 使用示例 -->
  <div>
    <!-- 可尝试一个页面上多个模型： -->
    <!-- <live2d
      :model="[1, 53]"
      :direction="direction"
      :width="width"
      :height="height"
      customId="vue-live2d-mian-2"
    ></live2d> -->
    <live2d
      :style="style"
      :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
      :direction="direction"
      :size="size"
      class="live"
    ></live2d>
  </div>
</template>

<script>
/*
 * 项目中引用包时，将 import 内容替换
 * import live2d from 'vue-live2d'
 */
import live2d from "vue-live2d";
export default {
  name: "App",
  components: {
    live2d,
  },
  data() {
    return {
      direction: "right",
      style: "position: fixed; bottom: -10px; right: -30px; zIndex: 1",
      width: 500,
      height: 500,
      size: 250,
      tips: {
        mouseover: [
          {
            selector: "live2d",
            texts: [`要我一直看着你吗`],
          },
        ],
      },
    };
  },
  created() {
    // tips 未使用，可自行在组件绑定此参数，注意此参数只会初始化一次
    this.tips = this.customTips;
  },
};
</script>

<style scoped>
</style>