<template>
  <div class="topImage">
    <div class="img">
      <img src="../../public/images/topImage.jpg" alt="" />
      <h4>TohsakaGozen</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopImage",
};
</script>

<style scoped>
.img {
  position: relative;
  height: 35rem;
  overflow: hidden;
  width: 100%;
  text-align: center;
}
img {
  width: 100%;
}
h4 {
  position: absolute;
  top: 50%;
  width: 100vw;
  text-align: center;
  font-size: 5rem;
  font-weight: 100;
  font-family: YOUYUAN;
  color: rgb(34, 29, 29);
}
</style>