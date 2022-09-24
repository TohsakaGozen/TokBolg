import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { reqMyMusicList, reqMusicID, reqMusic } from "@/api/index"
Vue.config.productionTip = false

reqMyMusicList("1393061643").then((values) => {
  console.log(values)
})
reqMusicID("2132295962").then((values) => {
  console.log(values)
})
reqMusic("1958017000").then((values) => {
  console.log(values)
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
