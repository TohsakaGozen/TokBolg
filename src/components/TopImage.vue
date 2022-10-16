<template>
  <div
    class="topImage"
    data-aos="fade-down"
    data-aos-once="true"
    data-aos-duration="2000"
  >
    <div class="img">
      <img :src="showTopImage" alt="" />
      <h4>{{ this.$route.meta[0] }}</h4>
      <wave />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
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
  methods: {
    async requireTopImages() {
      await this.$store.dispatch("image/getArticleImages");
      let i = Math.ceil(Math.random() * this.articleImages.length - 1);
      this.showTopImage = this.articleImages[i];
      console.log(this.articleImages.length);
    },
  },
  created() {
    this.requireTopImages();
  },
  mounted() {
    AOS.init();
  },
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