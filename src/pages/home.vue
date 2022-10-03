<template>
  <div class="homeBox">
    <div class="homeLeft">
      <div class="count">
        <p>文章目录</p>
        <p>共{{ articleList.length }}篇</p>
      </div>
      <div class="pageList">
        <article
          v-for="(item, index) in articleList"
          :key="index"
          class="article"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="3000"
          @click="
            $router.push({
              name: 'article',
              path: '/article',
              params: { index },
            })
          "
        >
          <div class="itemTitle">
            {{ item.title }}
          </div>
          <div class="itemTime">
            {{ item.time }}
          </div>
          <div class="itemDate"></div>
          <div v-html="item.info" class="itemInfo"></div>
          <img :src="articleImages[index]" alt="" />
        </article>
      </div>
    </div>
    <div class="homeRight">
      <section class="userInfo">
        <img src="../../public/images/user.jpg" alt="" />
        <p><strong>id</strong> : TohsakaGozen</p>
        <p><strong>qq</strong> : 1679124358</p>
        <p>
          <a href="https://github.com/TohsakaGozen?tab=repositories"
            >==>GITHUB</a
          >
        </p>
      </section>
      <section class="musicShow">
        <h3 class="sectionTitle">MYMUSIC</h3>
        <!-- <audio ref="audio" :src="audioUrl" @ended="nextMusic()"></audio> -->
        <div v-if="this.homeMusicList.length == 0" class="loading">
          <img src="@/assets/loading.gif" alt="" />
        </div>
        <div class="musicList">
          <h5
            :class="{ activeAudio: $store.state.music.appMusicID == music.id }"
            v-for="(music, index) in this.homeMusicList"
            :key="index"
            @click="playMusic(music)"
          >
            {{ music.name }}
            <img
              v-if="$store.state.music.appMusicID != music.id"
              src="../assets/play.png"
              alt=""
            />
            <img
              v-if="$store.state.music.appMusicID == music.id && isPlay == true"
              src="../assets/pause.png"
              alt=""
            />
          </h5>
        </div>
      </section>
      <section class="imageShow">
        <carousel />
      </section>
      <!-- <section class="nearArticles">
        <h3 class="sectionTitle">NEARARTICLES</h3>
      </section> -->
    </div>
  </div>
</template>

<script>
import carousel from "@/components/Carousel.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    carousel,
  },
  computed: {
    ...mapState("music", ["homeMusicList", "audioUrl", "isPlay"]),
    ...mapState("image", ["articleImages"]),
    ...mapState("article", ["articleList"]),
  },
  methods: {
    async playMusic(music) {
      if (music.id == this.$store.state.music.appMusicID) {
        this.$store.state.music.appMusicID = -1;
        this.$parent.$refs.audio.pause();
        this.$store.dispatch("music/pasueMusic");
      } else {
        try {
          await this.$store.dispatch("music/reqAdudio", music.id);
          this.$parent.$refs.audio.play();
          this.$store.state.music.appMusicID = music.id;
        } catch (error) {
          alert(error);
        }
      }
    },
  },
  created() {
    try {
      this.$store.dispatch("music/reqHomeMusicList");
      this.$store.dispatch("image/getArticleImages");
      this.$store.dispatch("article/getArticles");
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {},
};
</script>

<style scoped>
.homeBox {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 93%;
  min-height: 90rem;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  /* box-shadow: 0 0 5px rgb(81, 81, 81); */
  border-radius: 3px;
}
.homeLeft {
  font-family: YOUYUAN;
  width: 70%;
  overflow: hidden;
  padding-top: 1rem;
  /* box-shadow: 0 0 3px rgb(81, 81, 81); */
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
  position: relative;
  margin: 2rem;
  width: 90%;
  height: 40rem;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(139, 139, 139);
  border-radius: 0.3rem;
  padding: 0.5rem;
  overflow: hidden;
  transition: 0.5s;
}
.itemTitle {
  position: relative;
  text-align: center;
  font-size: 3rem;
  z-index: 1;
}
.itemTime {
  width: 100%;
  display: flex;
  font-size: 1.7rem;
  padding: 5px;
  font-family: YOUYUAN;
  color: rgb(255, 0, 0);
  justify-content: center;
}
.itemInfo {
  position: relative;
  text-align: center;
  height: 80%;
  z-index: 1;
  font-weight: normal;
  color: rgb(59, 59, 59);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
}
.homeLeft .pageList .article img {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  width: 100%;
  opacity: 0.3;
}
.homeLeft .pageList .article:hover {
  scale: 1.03;
}
.homeLeft .pageList .article:hover img {
  scale: 1.1;
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
  font-weight: 100;
  overflow: hidden;
}
.homeRight {
  flex: 1;
}
.homeRight section {
  min-height: 20rem;
  background-color: rgb(252, 249, 245, 0.5);
  margin: 2rem;
  margin-right: 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.userInfo {
  box-shadow: 0 0 10px silver;
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
  box-shadow: 0 0 10px silver;
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
  height: 92.7%;
  bottom: 0.5rem;
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
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.loading img {
  width: 70%;
}
.imageShow {
  overflow: hidden;
  height: 45rem;
  box-shadow: 0 0 10px silver;
}
.nearArticles {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nearArticles .sectionTitle {
  color: orange;
}
a {
  color: black;
  text-decoration: none;
}
</style>