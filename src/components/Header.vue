<template>
  <div class="headerBox">
    <login v-show="loginWindow" />
    <div class="headerLeft">TOKBLOG</div>
    <div class="headerRight">
      <li @click="$router.push({ name: 'home' })">
        <img src="@/assets/home.png" alt="" />首页
      </li>
      <li @click="$router.push({ name: 'record' })">
        <img src="@/assets/note.png" alt="" />记录
      </li>
      <li @click="$router.push({ name: 'projects' })">
        <img src="@/assets/demo.png" alt="" />DEMO
      </li>
      <li @click="$router.push({ name: 'photoAlbum' })">
        <img src="@/assets/photo.png" alt="" />相册
      </li>
      <li @click="$router.push({ name: 'person' })">
        <img src="@/assets/person.png" alt="" />个人
      </li>
      <li @click="$router.push({ name: 'comment' })">
        <img src="@/assets/message.png" alt="" />留言板
      </li>
      <a target="_blank" href="https://github.com/TohsakaGozen">
        <li><img src="@/assets/github.png" alt="" />GitHub</li></a
      >
      <div class="lr">
        <li v-if="userInfo">欢迎光临捏</li>
        <li v-if="!userInfo" @click="goLogin()">登录</li>
        <p>|</p>
        <li id="user" v-if="userInfo">
          {{ userInfo.username }}
          <p @click="exitLogin()">退出登录</p>
        </li>
        <li v-if="!userInfo" @click="goRegister()">注册</li>
      </div>
    </div>
  </div>
</template>
<script>
import login from "@/components/Login.vue";
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      loginWindow: false,
      registerWindow: false,
    };
  },
  components: {
    login,
  },
  computed: {
    ...mapState("loginAndRegister", ["token", "userInfo"]),
  },
  methods: {
    exitLogin() {
      this.$store.dispatch("loginAndRegister/exitLogin");
    },
    goLogin() {
      this.loginWindow = !this.loginWindow;
      this.$bus.$emit("register", false);
      this.$bus.$emit("focus1");
    },
    goRegister() {
      this.loginWindow = !this.loginWindow;
      this.registerWindow = !this.registerWindow;
      this.$bus.$emit("register", true);
      this.$bus.$emit("focus2");
    },
  },
  mounted() {
    this.$bus.$on("loginClose", () => {
      this.loginWindow = false;
    });
    this.$bus.$on("login", () => {
      this.loginWindow = true;
    });
  },
};
</script>

<style scoped>
.headerBox {
  z-index: 99999999;
  user-select: none;
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: rgb(239, 239, 239, 0.9);
}
.headerBox .headerRight {
  display: flex;
  list-style: none;
  min-width: 55%;
  justify-content: space-around;
  align-items: center;
  font-family: YOUYUAN;
  font-size: 1.5rem;
}
.headerBox .headerRight li {
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  transition: 0.2s;
}
.headerBox .headerRight img {
  width: 2.1rem;
}
.lr p {
  font-size: 2rem;
  padding: 0.5rem;
}
.lr {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.headerBox .headerRight .lr li {
  padding: 0.2rem;
  transition: all 0.2s;
}
.headerBox .headerRight li:hover {
  scale: 1.1;
  background-color: rgb(198, 222, 222);
}
.headerBox .headerLeft {
  flex: 1;
  display: flex;
  font-family: YOUYUAN;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
#user {
  display: flex;
  flex-direction: column;
}
#user p {
  display: none;
}
#user p:hover {
  color: white;
  background-color: rgb(63, 79, 79);
}
#user:hover {
  padding: 1.5rem;
  scale: 1;
  height: 5rem;
}
#user:hover#user p {
  display: block;
  font-size: 1rem;
}
</style>