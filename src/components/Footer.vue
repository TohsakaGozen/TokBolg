<template>
  <div class="footerBox">
    <p>Copyright © 2022 TohsakaGozen All rights reserved</p>
    <br />
    <p>
      TohsakaGozen个人所有
      <a href="https://beian.miit.gov.cn"> 蜀ICP备2022028280号</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footerBox {
  position: absolute;
  align-self: flex-end;
  bottom: 0;
  width: 107%;
  height: 10vh;
  background-color: rgb(191, 191, 191, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(83, 83, 83);
  font-size: 1.2rem;
}
a {
  color: rgb(83, 83, 83);
  text-decoration: none;
}
a:hover {
  color: rgb(27, 26, 26);
  text-decoration: none;
}
</style>