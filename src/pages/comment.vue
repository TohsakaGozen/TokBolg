<template>
  <div class="commentBox">
    <div class="uploadComment" @click="openBox()">上传评论</div>
    <div v-if="openWindow" class="uploadBox">
      <div @click="openBox()" class="close">X</div>
      <div class="userInfo">
        <div class="userImage">
          <img src="../../public/images/user.jpg" alt="" />
        </div>
        <div class="username">{{ userInfo.username }}</div>
      </div>
      <div class="textArea">
        <textarea
          v-model="textData.comment"
          name=""
          id=""
          cols="40"
          rows="10"
        ></textarea>
      </div>
      <button @click="uploadComment()">发送</button>
    </div>
    <div class="user" v-for="(user, index) in userComments" :key="index">
      <div
        v-for="(comments, index) in user.comment"
        :key="index"
        class="commentItem"
      >
        <div class="userInfo">
          <div class="userImage">
            <img src="../../public/images/user.jpg" alt="" />
          </div>
          <div class="username">{{ user.username }}</div>
          <div class="commentTime">{{ comments.time }}</div>
        </div>
        <div class="userComment">
          <p>{{ comments.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Comment",
  data() {
    return {
      openWindow: false,
      textData: {
        username: "",
        comment: "",
      },
    };
  },
  computed: {
    ...mapState("loginAndRegister", ["userInfo"]),
    ...mapState("comment", ["userComments"]),
  },
  methods: {
    openBox() {
      if (this.userInfo.username == null) {
        this.$message({
          showClose: true,
          message: "请先登录",
          type: "warning",
        });
      } else {
        this.openWindow = !this.openWindow;
        console.log(this.textData);
      }
    },
    async uploadComment() {
      try {
        this.textData.username = this.userInfo.username;
        let result = await this.$store.dispatch(
          "comment/upLoadComment",
          this.textData
        );
        this.$message({
          showClose: true,
          message: result.message,
          type: "success",
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      } catch (error) {
        this.$message({
          showClose: true,
          message: "请先登录",
          type: "warning",
        });
      }
    },
  },
  created() {
    this.$store.dispatch("comment/reqComments");
  },
};
</script>

<style scoped>
.uploadBox {
  border-radius: 5px;
  position: fixed;
  top: -25%;
  width: 60rem;
  height: 28rem;
  padding: 1rem;
  background-color: azure;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px rgb(100, 100, 100);
  align-items: center;
}
.uploadBox button {
  width: 10rem;
  background-color: rgb(255, 134, 93);
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-size: 1.6rem;
  transition: all 0.3s;
  border: 0;
  height: 3rem;
  box-shadow: 0 0 5px black;
}
.uploadBox button:hover {
  scale: 1.1;
}
.close {
  position: absolute;
  color: rgb(144, 144, 144);
  font-size: 2rem;
  top: 0;
  right: 1rem;
  cursor: pointer;
}
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
.textArea {
  margin: 1rem;
}
.textArea textarea {
  border: 0;
  outline: none;
  padding: 1rem;
  width: 55rem;
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
  margin-left: 50rem;
}
.uploadBox .userImage {
  margin-left: 2rem;
  width: 10%;
}
.uploadBox .userInfo {
  font-family: YOUYUAN;
  font-size: 1.8rem;
  border-bottom: 1px solid pink;
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
.userInfo .username {
  display: flex;
  justify-content: left;
  width: 15rem;
  font-size: 1.3rem;
}
</style>