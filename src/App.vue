<template>
  <div class="app">
    <Header />
    <live2d />
    <Sakana />
    <topImage />
    <vueCanvasNest :config="config" :el="'.app'" />
    <keep-alive>
      <router-view class="routerContent"> </router-view>
    </keep-alive>
    <audio ref="audio" :src="audioUrl" @ended="nextMusic()"></audio>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sakana from "@/components/Sakana";
import topImage from "@/components/TopImage.vue";
import live2d from "@/components/live2d.vue";
import vueCanvasNest from "vue-canvas-nest";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Sakana,
    topImage,
    live2d,
    vueCanvasNest,
  },
  data() {
    return {
      musicID: 0,
      config: {
        color: "24, 255, 201",
        opacity: 1,
        zIndex: -999,
        count: 100,
      },
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
html::-webkit-scrollbar-thumb {
  background-color: rgb(136, 255, 188);
}
html::-webkit-scrollbar {
  width: 1rem;
  background-color: rgb(221, 221, 221);
}
.routerContent {
  width: 100vw;
}
</style>
