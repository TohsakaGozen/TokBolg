<template>
  <div class="footerBox">
    <div class="beianbox" style="width: 300px; margin: 0 auto; padding: 0">
      <p>Copyright © 2022 TohsakaGozen All rights reserved</p>
      <p>
        <a href="https://beian.miit.gov.cn"> 蜀ICP备2022028280号</a>
      </p>
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51192302000224"
        style="
          display: inline-block;
          text-align: center;
          text-decoration: none;
          height: 20px;
          line-height: 20px;
        "
        ><img src="../assets/备案图标.png" style="float: left" />
        <p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            color: #939393;
          "
        >
          川公网安备 51192302000224号
        </p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.beianbox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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