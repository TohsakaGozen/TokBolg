<template>
  <div :style="{ height: scrollerHeight }" class="scrollBox" ref="cont">
    <div
      class="item"
      v-for="(image, index) in showImage"
      ref="water"
      :key="index"
    >
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showImage: [],
      imageNumber: 23,
      count: 0,
      InScrollHeight: 160,
    };
  },
  methods: {
    scrollHandle() {
      let pageHeight;
      if (this.count >= 1) {
        pageHeight = 1650 + parseInt(this.scrollerHeight) * this.count;
      } else {
        pageHeight = 1650;
      }
      let scrollHeight = Math.floor(window.scrollY) + 729;

      // 滚动条距离底部的距离scrollBottom
      let scrollBottom = pageHeight - scrollHeight;
      if (scrollBottom <= 50 && scrollBottom >= -50) {
        this.count = 4.1;
        if (this.imageNumber < this.imgaesUrlList.length) {
          this.reqImages(this.imageNumber);
          this.addHeight(this.scrollerHeight);
        }
      }
      console.log(pageHeight, scrollHeight);
    },
    reqImages(oldImageNumber) {
      this.imageNumber += 15;
      this.$store.dispatch("image/getImagesList");
      for (let i = oldImageNumber; i < this.imageNumber; i++) {
        this.showImage.push(this.imgaesUrlList[i]);
      }
    },
    addHeight(oldHeight) {
      let newh;
      this.scrollerHeight.split("r");
      newh =
        this.scrollerHeight[0] +
        this.scrollerHeight[1] +
        this.scrollerHeight[2];
      newh = parseInt(newh);
      this.scrollerHeight = newh + 90;
    },
  },
  computed: {
    scrollerHeight: {
      get() {
        return this.InScrollHeight + "rem"; //自定义高度需求
      },
      set(v) {
        this.InScrollHeight = v;
      },
    },

    ...mapState("image", ["imgaesUrlList"]),
  },
  created() {
    this.$store.dispatch("image/getImagesList");
    setTimeout(() => {
      for (let i = 0; i < this.imageNumber; i++) {
        this.showImage.push(this.imgaesUrlList[i]);
      }
    }, 300);
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle); // 监听页面滚动
  },
};
</script>

<style scoped>
.scrollBox {
  display: flex;
  flex-direction: column;
  height: 130rem;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
}
.scrollBox ul {
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  counter-increment: itemCount;
}
.item::after {
  position: absolute;
  height: 30px;
  line-height: 30px;
  width: 30px;
  z-index: -1;
  text-align: center;
  background-color: #000;
  color: #fff;
  top: 10px;
  left: 10px;
  content: counter(itemCount);
}
.scrollBox img {
  width: 29rem;
  position: relative;
  z-index: -1;
  display: block;
  margin: 0.4rem;
  border-radius: 5px;
}
</style> 