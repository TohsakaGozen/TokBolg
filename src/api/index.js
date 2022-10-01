import reqMusicApi from "./reqMusicApi";
import request from "./request";
import reqDemo from "./reqDemo";

export const reqMyMusicList = (uid) => reqMusicApi({ url: `/user/playlist?uid=${uid}`, method: 'get' })
export const reqMusicID = (id) => reqMusicApi({ url: `/playlist/track/all?id=${id}`, method: 'get' })
export const reqMusic = (id) => reqMusicApi({ url: `/song/url/v1?id=${id}&level=higher`, method: 'get' })


export const reqImages = () => request({ url: `/images`, method: 'get' })
export const reqArticleImages = () => request({ url: `/articleImages`, method: 'get' })

export const reqArticles = () => request({ url: `/article`, method: 'get' })
export const upLoadArticle = (articleData) => request({
    url: `/article?file=${articleData}`, method: 'get', headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const reqgithubRepos = (username) => reqDemo({ url: `/${username}/repos`, method: 'get' })