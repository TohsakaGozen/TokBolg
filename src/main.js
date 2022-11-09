import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Carousel, CarouselItem, InfiniteScroll, Message, Pagination } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
Vue.use(AOS)
Vue.prototype.$message = Message

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
  router,
  store,

}).$mount('#app')

