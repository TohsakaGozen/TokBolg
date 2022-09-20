<template>
  <div class="sakana"><div id="sakana-widget"></div></div>
</template>

<script>
import SakanaWidget from "sakana-widget/lib";
export default {
  name: "Sakana",
  mounted() {
    const takina = SakanaWidget.getCharacter("takina");
    takina.initialState = {
      ...takina.initialState,
      i: 0.001,
      d: 1,
      autoFit: true,
    };
    SakanaWidget.registerCharacter("takina-slow", takina);
    new SakanaWidget({ character: "takina-slow" }).mount("#sakana-widget");
  },
};
</script>

<style scoped>
.sakana {
  position: fixed;
  width: 100%;
  left: -30px;
  bottom: -25px;
}
</style>