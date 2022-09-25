<template>
  <div class="app">
    <Header />
    <Sakana />
    <topImage />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sakana from "@/components/Sakana";
import topImage from "@/components/TopImage.vue";
export default {
  name: "App",
  components: {
    Header,
    Sakana,
    topImage,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  /* font-size: 12px; */
  font-size: 10px;
}
</style>
