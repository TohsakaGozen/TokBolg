<template>
  <div class="recordContent">
    <form action="">
      <input
        type="file"
        ref="file"
        name=""
        v-on:change="handleFileUpload($event)"
      />
    </form>
    <article
      v-for="(item, index) in articleList"
      :key="index"
      class="item"
      @click="
        $router.push({ name: 'article', path: '/article', params: { index } })
      "
    >
      <div class="itemTitle">
        {{ item.title }}
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
    handleFileUpload(event) {
      event.preventDefault();
      let formData = new FormData();
      let file = this.$refs.file.files[0];
      formData.append("file", file);
      console.log(formData.get("file"));
      this.upLoadArticle(formData);
    },
    upLoadArticle(formData) {
      this.$store.dispatch("article/upLoadArticle", formData);
    },
  },
  created() {
    this.$store.dispatch("image/getArticleImages");
    this.$store.dispatch("article/getArticles");
  },
};
</script>

<style scoped>
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