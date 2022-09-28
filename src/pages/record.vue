<template>
  <div class="recordContent">
    <article class="item">
      <div class="itemInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid
        repellendus distinctio
      </div>
      <img :src="articleImages[0]" alt="" />
    </article>
    <article class="item">
      <div class="itemInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid
        repellendus dist
      </div>
      <img :src="articleImages[1]" alt="" />
    </article>
    <article class="item">
      <div class="itemInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid
        repellendus d
      </div>
      <img :src="articleImages[2]" alt="" />
    </article>
    <article class="item">
      <div class="itemInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid
        repellendus d
      </div>
      <img :src="articleImages[3]" alt="" />
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("image", ["articleImages"]),
  },
  created() {
    this.$store.dispatch("image/getArticleImages");
  },
};
</script>

<style>
.recordContent {
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
  width: 80%;
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
  left: 0;
  position: absolute;
  width: 100%;
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
.recordContent .item img:hover {
  scale: 1.1;
}
.recordContent .item:hover {
  scale: 1.05;
}
</style>