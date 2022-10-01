<template>
  <div class="topImage">
    <div class="img">
      <img :src="showTopImage" alt="" />
      <h4>{{ this.$route.meta[0] }}</h4>
      <wave />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import wave from "./wave.vue";
export default {
  components: { wave },
  name: "TopImage",
  data() {
    return {
      showTopImage: "",
    };
  },
  computed: {
    ...mapState("image", ["articleImages"]),
  },
  created() {
    this.$store.dispatch("image/getArticleImages");
    setTimeout(() => {
      let i = Math.ceil(Math.random() * this.articleImages.length - 1);
      console.log(i);
      this.showTopImage = this.articleImages[i];
    }, 200);
  },
  mounted() {},
};
</script>

<style scoped>
.img {
  position: relative;
  height: 35rem;
  overflow: hidden;
  width: 100%;
  text-align: center;
  /* box-shadow: 0 0 15px rgb(126, 130, 129); */
}
img {
  top: -30%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  width: 100%;
}
h4 {
  position: absolute;
  top: 40%;
  width: 100vw;
  text-align: center;
  font-size: 8rem;
  font-weight: 100;
  font-family: YOUYUAN;
  color: rgb(34, 29, 29);
}
</style>