<template>
  <div class="app">
    <Header />
    <Sakana />
    <topImage />
    <keep-alive>
      <router-view class="routerContent"></router-view>
    </keep-alive>
    <audio ref="audio" :src="audioUrl" @ended="nextMusic()"></audio>
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
  data() {
    return {
      musicID: 0,
    };
  },
  methods: {
    async nextMusic() {
      let newmusicID = await this.$store.dispatch(
        "music/reqNextAdudio",
        this.$store.state.music.appMusicID
      );
      this.$store.state.music.appMusicID = newmusicID;
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
