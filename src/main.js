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
  router,
  store
}).$mount('#app')

