import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Carousel, CarouselItem, InfiniteScroll } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
  router,
  store,

}).$mount('#app')

