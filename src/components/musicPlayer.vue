<template>
  <div :class="{ musicPlayer: 1, click: isShow }">
    <img
      @click.stop="show()"
      :class="{ musicImge: 1, rotatingPause: !isPlay }"
      :src="audioImg"
      alt=""
    />
    <div @click="stopMusic()" :class="{ state: 1, other: !isShow }">
      <img v-if="!isPlay" src="../assets/play.png" alt="" />
      <img v-if="isPlay" src="../assets/pause.png" alt="" />
      <img @click="nextMusic()" src="../assets/next.png" alt="" />
    </div>
    <div :class="{ musicName: 1, other: !isShow }">{{ audioName }}</div>
    <div @click.stop="show()" class="packUp">
      <img src="@/assets/input.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    canleShow() {
      this.isShow = 0;
    },
    show() {
      this.isShow = !this.isShow;
    },
    stopMusic() {
      if (this.isPlay == true) {
        this.$parent.$refs.audio.pause();
        this.$store.dispatch("music/pasueMusic");
      } else {
        this.$parent.$refs.audio.play();
        this.$store.dispatch("music/pasueMusic");
      }
    },
    async nextMusic() {
      let newmusicID = await this.$store.dispatch(
        "music/reqNextAdudio",
        this.$store.state.music.appMusicID
      );
      this.$store.state.music.appMusicID = newmusicID;
      this.$parent.$refs.audio.play();
    },
  },
  computed: {
    ...mapState("music", ["audioUrl", "audioImg", "audioName", "isPlay"]),
  },
};
</script>

<style scoped>
.musicPlayer {
  overflow: hidden;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 5rem;
  z-index: 9999999999999999999;
  left: 0;
  top: 45%;
  height: 5rem;
  border-radius: 0 100% 100% 0;
  background-color: aliceblue;
  transition: all 1s;
}

.musicName {
  width: 60%;
  display: flex;
  justify-content: center;
  padding-right: 10px;
  flex-wrap: nowrap;
  font-size: 1.5rem;
  font-family: YOUYUAN;
}
.musicPlayer .musicImge {
  animation: rotating infinite 15s linear;
  height: 100%;
  border-radius: 100%;
  cursor: pointer;
  animation-play-state: running;
}
.musicPlayer .rotatingPause {
  animation-play-state: paused;
}
.packUp {
  display: flex;
  align-items: center;
  width: 10%;
  align-content: flex-end;
  cursor: pointer;
}
.packUp img {
  width: 100%;
  cursor: pointer;
  height: 100%;
}
@rotating App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.state {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
.state img {
  height: 50%;
  margin-right: 5px;
  border-radius: 100%;
}
.other {
  display: none;
}
.click {
  background-color: aliceblue;
  border-radius: 0 35px 35px 0;
  width: 25rem;
}
</style>