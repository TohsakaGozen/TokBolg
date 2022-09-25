<template>
  <div class="homeBox">
    <div class="homeLeft">
      <div class="count">
        <p>文章目录</p>
        <p>共35篇</p>
      </div>
      <div class="pageList">
        <div class="article">
          <div class="header">Promise解决回调地狱</div>
          <div class="content">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
        <div class="article">
          <div class="header">Promise解决回调地狱</div>
          <div class="content">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
        <div class="article">
          <div class="header">Promise解决回调地狱</div>
          <div class="content">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
        <div class="article">
          <div class="header">Promise解决回调地狱</div>
          <div class="content">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
      </div>
    </div>
    <div class="homeRight">
      <section class="userInfo">
        <img src="../../public/images/user.jpg" alt="" />
        <p><strong>id</strong> : TohsakaGozen</p>
        <p><strong>qq</strong> : 1679124358</p>
        <p>
          <a href="https://github.com/TohsakaGozen?tab=repositories">github</a>
        </p>
      </section>
      <section class="musicShow">
        <h3 class="sectionTitle">MYMUSIC</h3>
        <audio ref="audio" :src="audioUrl" @ended="nextMusic()"></audio>
        <div class="musicList">
          <h5
            :class="{ activeAudio: musicID == music.id }"
            v-for="(music, index) in this.homeMusicList"
            :key="index"
            @click="playMusic(music)"
          >
            {{ music.name }}
            <img v-if="musicID != music.id" src="../assets/play.png" alt="" />
            <img v-if="musicID == music.id" src="../assets/pause.png" alt="" />
          </h5>
        </div>
      </section>

      <section class="imageShow"></section>
      <section class="nearArticles"></section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      musicID: 0, //需要进行播放的音乐id
      isPlay: 0,
    };
  },
  watch: {
    $refs(o, n) {
      console.log(o, n);
    },
  },
  computed: {
    ...mapState("music", ["homeMusicList", "audioUrl"]),
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
    async playMusic(music) {
      if (music.id == this.musicID) {
        this.isPlay = 0;
        this.musicID = -1;
        this.$refs.audio.pause();
      } else {
        try {
          await this.$store.dispatch("music/reqAdudio", music.id);
          this.$refs.audio.play();
          this.isPlay = 1;
          this.musicID = music.id;
        } catch (error) {
          alert(error);
        }
      }
    },
  },
  created() {
    this.$store.dispatch("music/reqAdudio", this.musicID);
    this.$store.dispatch("music/reqHomeMusicList");
  },
};
</script>

<style scoped>
.homeBox {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  background-color: rgb(255, 255, 255);
  width: 90%;
  min-height: 90rem;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  /* box-shadow: 0 0 5px rgb(81, 81, 81); */
  border-radius: 3px;
}
.homeLeft {
  width: 70%;
  overflow: hidden;
  padding-top: 1rem;
  box-shadow: 0 0 3px rgb(81, 81, 81);
  background-color: rgb(255, 250, 245);
  display: flex;
  flex-direction: column;
}
.homeLeft .count {
  display: flex;
  align-self: center;
  width: 95%;
  justify-content: space-between;
}
.homeLeft .pageList {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.homeLeft .pageList .article {
  margin: 2rem;
  background-color: rgb(252, 243, 234);
  width: 90%;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(139, 139, 139);
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: 0.5s;
}
.homeLeft .pageList .article:hover {
  scale: 1.03;
}
.homeLeft .pageList .article .header {
  font-size: 2rem;
  width: 100%;
  border-bottom: 1px solid black;
}
.homeLeft .pageList .article .content {
  width: 100%;
  height: 35rem;
  font-size: 1.4rem;
  overflow: hidden;
}
.homeRight {
  flex: 1;
}
.homeRight section {
  min-height: 20rem;
  background-color: antiquewhite;
  margin: 2rem;
  margin-right: 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.userInfo {
  align-items: center;
}
.userInfo p {
  min-width: 14rem;
  border-bottom: 1px solid;
  font-size: 1.5rem;
  padding: 0.5rem;
  font-family: YOUYUAN;
}
.userInfo img {
  width: 30%;
  border-radius: 100%;
}
.musicInfo {
  display: flex;
  flex-direction: column;
}
.sectionTitle {
  position: absolute;
  color: rgb(251, 93, 93);
  top: 0.5rem;
  font-size: 2.8rem;
  text-align: center;
  font-family: YOUYUAN;
}
.musicShow {
  position: relative;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
}
.musicShow img {
  width: 9%;
}
.musicList {
  position: absolute;
  width: 90%;
  height: 93%;
  bottom: 0;
  left: 3rem;
  overflow-x: hidden;
  overflow-y: auto;
}
.musicList::-webkit-scrollbar-thumb {
  background-color: rgb(253, 138, 130);
}
.musicList::-webkit-scrollbar {
  width: 1rem;
  background-color: rgb(221, 221, 221);
}
.musicShow h5 {
  /* top: 700rem; */
  position: relative;
  width: 90%;
  min-height: 4rem;
  display: flex;
  padding: 1rem;
  margin-top: 0.5rem;
  justify-content: space-between;
  font-size: 1.1rem;
  padding-left: 3rem;
  font-weight: 100;
  font-family: YOUYUAN;
  transition: all 0.2s;
  border-bottom: 1px solid rgb(255, 55, 55);
  cursor: pointer;
  align-items: center;
  /* overflow: hidden; */
}
.musicShow h5:hover {
  background-color: rgb(255, 69, 69);
  scale: 1.05;
}
.musicShow .activeAudio {
  background-color: rgb(255, 127, 127);
  top: 0;
  width: 95%;
  font-size: 1.6rem;
  border: 0;
  border-radius: 1rem;
  padding: 2rem;
}
a {
  color: black;
  text-decoration: none;
}
</style>