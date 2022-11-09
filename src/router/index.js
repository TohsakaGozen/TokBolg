import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            meta: ["TOHSAKAGOZEN"],
            component: () => import("@/pages/home")
        },
        {
            path: '/photoAlbum',
            name: 'photoAlbum',
            meta: ["PHOTOALBUM"],
            component: () => import("@/pages/photoAlbum")
        },
        {
            path: '/record',
            name: 'record',
            meta: ["RECORD"],
            component: () => import("@/pages/record")
        },
        {
            path: '/projects',
            name: 'projects',
            meta: ["DEMO"],
            component: () => import("@/pages/projects")
        },
        {
            path: '/person',
            name: 'person',
            meta: ["ME"],
            component: () => import("@/pages/person")
        },
        {
            path: '/article/:index/:isSortUp',
            name: 'article',
            meta: ["ARTICLE"],
            component: () => import("@/pages/article")
        },
        {
            path: '/comment',
            name: 'comment',
            meta: ["COMMENT"],
            component: () => import("@/pages/comment")
        },

        {   //默认路由(路由重定向)
            path: '/',
            redirect: '/home'
        }
    ],
    //滚动行为，配置路由跳转之后滚动条的位置
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

//重复触发了同一个路由。
//这个错误是 vur - router更新以后新出现的错误,以下代码可抛出该错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default router