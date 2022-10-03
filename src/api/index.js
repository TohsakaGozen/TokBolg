import reqMusicApi from "./reqMusicApi";
import request from "./request";
import reqDemo from "./reqDemo";

//网易云api
export const reqMyMusicList = (uid) => reqMusicApi({ url: `/user/playlist?uid=${uid}`, method: 'get' })
export const reqMusicID = (id) => reqMusicApi({ url: `/playlist/track/all?id=${id}`, method: 'get' })
export const reqMusic = (id) => reqMusicApi({ url: `/song/url/v1?id=${id}&level=higher`, method: 'get' })

//自建api
export const reqImages = () => request({ url: `/images`, method: 'get' })
export const reqArticleImages = () => request({ url: `/articleImages`, method: 'get' })
export const reqArticles = () => request({ url: `/article`, method: 'get' })
export const upLoadArticle = (file) => request({
    url: `/upload`, data: file, method: 'post', header: { 'Content-Type': 'multipart/form-data' }
})

//gihubApi
export const reqgithubRepos = (username) => reqDemo({ url: `/${username}/repos`, method: 'get' })