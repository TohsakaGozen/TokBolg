<template>
  <div class="app">
    <Header />
    <live2d />
    <musicPlayer />
    <Sakana />
    <topImage />
    <router-view
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-duration="2000"
      class="routerContent"
    >
    </router-view>
    <audio ref="audio" :src="audioUrl" @ended="nextMusic()"></audio>
  </div>
</template>

<script>
import musicPlayer from "@/components/musicPlayer.vue";
import Header from "@/components/Header";
import Sakana from "@/components/Sakana";
import topImage from "@/components/TopImage.vue";
import live2d from "@/components/live2d.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Sakana,
    topImage,
    musicPlayer,
    live2d,
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
#nprogress .bar {
  background: rgb(167, 255, 202) !important;
}
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
  width: 0.5rem;
  background-color: rgb(26, 148, 255);
}
html::-webkit-scrollbar {
  width: 0.5rem;
  background-color: rgb(221, 221, 221);
}
.routerContent {
  width: 100vw;
}
</style>
