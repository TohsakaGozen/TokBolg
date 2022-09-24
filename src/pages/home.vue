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
      <div class="userInfo">
        <img src="../../public/images/user.jpg" alt="" />
        <p><strong>id</strong> : TohsakaGozen</p>
        <p><strong>qq</strong> : 1679124358</p>
        <p>
          <a href="https://github.com/TohsakaGozen?tab=repositories">github</a>
        </p>
      </div>
      <div class="imageShow"></div>
      <div class="nearArticles"></div>
      <div class="musicShow">
        <audio
          controls
          src="https://music.163.com/song/media/outer/url?id=1958017000.mp3 "
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
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
.homeRight div {
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
a {
  color: black;
  text-decoration: none;
}
</style>