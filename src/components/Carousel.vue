<template>
  <el-carousel height="45rem" :interval="5000">
    <el-carousel-item v-for="(imgUrl, index) in imgUrls" :key="index">
      <img :src="imgUrl" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      imgUrls: [
        require("../../public/images/CarouselImages/c1.jpg"),
        require("../../public/images/CarouselImages/c2.jpg"),
        require("../../public/images/CarouselImages/c3.jpg"),
        require("../../public/images/CarouselImages/c4.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item {
  width: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>