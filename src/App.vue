<template>
  <div class="app">
    <Header />
    <audio ref="audio" :src="audioUrl" @ended="nextMusic()"></audio>
    <Sakana />
    <topImage />
    <keep-alive>
      <router-view class="routerContent"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sakana from "@/components/Sakana";
import topImage from "@/components/TopImage.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Sakana,
    topImage,
  },
  methods: {
    async nextMusic() {
      let newmusicID = await this.$store.dispatch(
        "music/reqNextAdudio",
        this.musicID
      );
      this.musicID = newmusicID;
      this.$refs.audio.play();
    },
  },
  computed: {
    ...mapState("music", ["audioUrl"]),
  },
  mounted() {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  /* font-size: 12px; */
  font-size: 10px;
}
.routerContent {
  width: 100vw;
}
</style>
