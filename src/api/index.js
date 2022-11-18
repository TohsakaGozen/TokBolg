import reqMusicApi from "./reqMusicApi";
import request from "./request";
import reqDemo from "./reqDemo";
import store from '../store/index'
//网易云api
export const reqMyMusicList = (uid) => reqMusicApi({ url: `/user/playlist?uid=${uid}`, method: 'get' })
export const reqMusicID = (id) => reqMusicApi({ url: `/playlist/track/all?id=${id}`, method: 'get' })
export const reqMusic = (id) => reqMusicApi({ url: `/song/url/v1?id=${id}&level=higher`, method: 'get' })

//自建api
export const reqImages = () => request({ url: `/images`, method: 'get' })
export const reqArticleImages = () => request({ url: `/articleImages`, method: 'get' })
export const reqArticles = () => request({ url: `/article`, method: 'get' })
export const reqUserComments = () => request({ url: `/getComments`, method: 'get' })
export const upLoadArticle = (file) => request({
    url: `/upload`, data: file, method: 'post', headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${store.state.loginAndRegister.token}`
    }
})
export const upLoadComments = (data) => request({
    url: `/comment`, method: 'post', data: data, headers: {
        'Content-Type': 'application/json',
        'Authorization': `${store.state.loginAndRegister.token}`
    }
})
export const checkToken = () => request({
    url: `/checkToken`, method: 'post', headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${store.state.loginAndRegister.token}`
    }
})

export const reqRegister = (userInfo) => request({
    url: `/register`, data: userInfo, method: 'post', header: { 'Content-Type': 'application/json' }
})
export const reqLogin = (userInfo) => request({
    url: `/login`, data: userInfo, method: 'post', header: { 'Content-Type': 'application/json' }
})

//gihubApi
export const reqgithubRepos = (username) => reqDemo({ url: `/${username}/repos`, method: 'get' })

