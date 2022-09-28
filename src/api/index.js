import requests from "./request";
import reqImage from "./reqImage";
import reqArticle from "./article";

export const reqMyMusicList = (uid) => requests({ url: `/user/playlist?uid=${uid}`, method: 'get' })
export const reqMusicID = (id) => requests({ url: `/playlist/track/all?id=${id}`, method: 'get' })
export const reqMusic = (id) => requests({ url: `/song/url/v1?id=${id}&level=higher`, method: 'get' })


export const reqImages = () => reqImage({ url: `/images`, method: 'get' })
export const reqArticleImages = () => reqImage({ url: `/articleImages`, method: 'get' })

export const reqArticles = () => reqArticle({ url: `/article`, method: 'get' })