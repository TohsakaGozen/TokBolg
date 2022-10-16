<template>
  <div class="recordContent">
    <input type="file" ref="file" v-on:change="handleFileUpload($event)" />
    <div class="uploadFile" @click="fileUpload()">上传文章</div>
    <article
      v-for="(item, index) in articleList"
      :key="index"
      class="item"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-duration="2000"
      @click="
        $router.push({
          name: 'article',
          path: '/article',
          params: { index, isSortUp: true },
        })
      "
    >
      <div class="itemTitle">
        {{ item.title }}
      </div>
      <div class="itemTime">
        {{ item.time }}
      </div>
      <div v-html="item.info" class="itemInfo"></div>
      <img :src="articleImages[index]" alt="" />
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("image", ["articleImages"]),
    ...mapState("article", ["articleList"]),
  },
  methods: {
    fileUpload() {
      if (1) {
        this.$refs.file.click();
      } else {
        this.$message({
          showClose: true,
          message: "仅限管理员用户登录使用",
          type: "warning",
        });
        this.$bus.$emit("login");
      }
    },
    handleFileUpload(event) {
      event.preventDefault();
      let formData = new FormData();
      let file = this.$refs.file.files[0];
      formData.append("file", file);
      formData.append("filename", file.name);
      this.upLoadArticle(formData);
    },
    async upLoadArticle(formData) {
      try {
        await this.$store.dispatch("article/upLoadArticle", formData);
        this.$message({
          showClose: true,
          message: "上传成功",
          type: "success",
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      } catch (error) {
        this.$message({
          showClose: true,
          message: "上传失败",
          type: "warning",
        });
      }
    },
  },
  created() {
    this.$store.dispatch("image/getArticleImages");
    this.$store.dispatch("article/getArticles", true);
  },
  mounted() {},
};
</script>

<style scoped>
input {
  display: none;
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
.uploadFile {
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
  height: 3rem;
  background-color: rgb(224, 227, 226);
}
.uploadFile:hover {
  background-color: rgb(255, 133, 67);
  scale: 1.1;
}
.recordContent {
  position: relative;
  margin-left: auto;
  margin-top: 1rem;
  margin-right: auto;
  width: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.recordContent .item {
  width: 90%;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 30rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0 0 30px silver;
  margin: 3rem;
  overflow: hidden;
}
.recordContent .item .itemTitle {
  font-size: 5rem;
}
.recordContent .item .itemInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
}
.recordContent .item img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -99999;
  opacity: 0.5;

  transition: all 0.3s;
}
.item .itemInfo {
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 5.5rem;
  font-family: YOUYUAN;
  text-align: center;
}
.recordContent .item:hover img {
  scale: 1.1;
}
.recordContent .item:hover {
  scale: 1.05;
}
</style>