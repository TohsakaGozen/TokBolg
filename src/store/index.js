import Vue from "vue";
import Vuex from 'vuex'
import music from './music'
import image from './image'
import article from './article'
import demo from './demo'
import comment from './comment'
import loginAndRegister from './loginAndRegister'
//需要使用插件一次
Vue.use(Vuex)

export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules: {
        music,
        image,
        article,
        loginAndRegister,
        demo,
        comment
    }
})