<template>
  <div class="headerBox">
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
      <li><img src="@/assets/message.png" alt="" />留言板</li>
      <a target="_blank" href="https://github.com/TohsakaGozen">
        <li><img src="@/assets/github.png" alt="" />GitHub</li></a
      >
      <div class="lr">
        <li>登录</li>
        <p>|</p>
        <li>注册</li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
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
}
.headerBox .headerRight .lr li {
  padding: 0.2rem;
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
</style>