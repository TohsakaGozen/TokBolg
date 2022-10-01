<template>
  <div class="recordContent">
    <article v-for="(item, index) in demoList" :key="index" class="item">
      <div class="itemInfo">
        {{ item.name }}
      </div>
      <a target="_blank" :href="item.html_url"
        ><img :src="articleImages[index]" alt="" />s</a
      >
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("image", ["articleImages"]),
    ...mapState("demo", ["demoList"]),
  },
  created() {
    this.$store.dispatch("image/getArticleImages");
    this.$store.dispatch("demo/getDemos");
  },
};
</script>

<style scoped>
.recordContent {
  margin-left: auto;
  margin-top: 1rem;
  margin-right: auto;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
}
.recordContent .item {
  width: 20%;
  transition: all 0.3s;
  position: relative;
  height: 30rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0 0 30px silver;
  margin: 3rem;
  overflow: hidden;
}
.recordContent .item img {
  top: 0;
  left: -40%;
  display: flex;
  position: absolute;
  height: 100%;
  opacity: 0.5;

  transition: all 0.3s;
}
.item .itemInfo {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  font-family: YOUYUAN;
  text-align: center;
}
.recordContent .item img:hover {
  scale: 1.1;
}
.recordContent .item:hover {
  scale: 1.05;
}
</style>