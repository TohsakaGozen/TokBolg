<template>
  <div class="commentBox">
    <div class="uploadComment">上传评论</div>
    <div class="commentItem">
      <div class="userInfo">
        <div class="userImage">
          <img src="../../public/images/user.jpg" alt="" />
        </div>
        <div class="username">TohsakaGozen</div>
        <div class="commentTime">2022-11-11 10:28</div>
      </div>
      <div class="userComment">
        <p>欢迎来到我的小站</p>
      </div>
    </div>
    <div class="commentItem">
      <div class="userInfo">
        <div class="userImage">
          <img src="../../public/images/user.jpg" alt="" />
        </div>
        <div class="username">TohsakaGozen</div>
        <div class="commentTime">2022-11-11 10:28</div>
      </div>
      <div class="userComment">
        <p>欢迎来到我的小站</p>
      </div>
    </div>
    <div class="commentItem">
      <div class="userInfo">
        <div class="userImage">
          <img src="../../public/images/user.jpg" alt="" />
        </div>
        <div class="username">TohsakaGozen</div>
        <div class="commentTime">2022-11-11 10:28</div>
      </div>
      <div class="userComment">
        <p>欢迎来到我的小站</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {};
  },
};
</script>

<style scoped>
.uploadComment {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: YOUYUAN;
  font-size: 1.4rem;
  cursor: pointer;
  width: 10rem;
  box-shadow: 0 0 2px silver;
  transition: all 0.3s;
  border-radius: 5px;
  margin-bottom: 2rem;
  height: 3rem;
  background-color: rgb(164, 254, 224);
}
.uploadComment:hover {
  scale: 1.1;
}
.commentBox {
  width: 85%;
  min-height: 400px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.commentItem {
  width: 90rem;
  min-height: 15rem;
  box-shadow: 0 0 10px black;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}
.userInfo {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: left;
}
.userImage {
  width: 6%;
  height: 100%;
}
.userImage img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.userInfo div {
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.commentTime {
  margin-left: 60rem;
}
.userComment {
  padding: 0.8rem;
  flex: 1;
  background-color: rgb(194, 239, 224);
}
.userComment p {
  font-family: YOUYUAN;
  font-size: 1.4rem;
}
</style>