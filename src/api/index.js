import requests from "./request";
import test from "./test111";

export const reqMyMusicList = (uid) => requests({ url: `/user/playlist?uid=${uid}`, method: 'get' })
export const reqMusicID = (id) => requests({ url: `/playlist/track/all?id=${id}`, method: 'get' })
export const reqMusic = (id) => requests({ url: `/song/url/v1?id=${id}&level=higher`, method: 'get' })


export const reqImages = () => test({ url: `/images`, method: 'get' })