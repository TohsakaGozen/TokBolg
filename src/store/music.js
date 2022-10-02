import { getAllMusicParamsList } from '@/util/Mymusic/reqMusic'
import { reqMusic } from "@/api/index"
const state = {
    myMusicList: [],
    homeMusicList: [],
    isPlay: false,
    audioUrl: JSON.parse(localStorage.getItem('audioUrl')),
    audioImg: JSON.parse(localStorage.getItem('audioImg'))||require('../../public/images/user.jpg'),
    audioName: JSON.parse(localStorage.getItem('audioName')),
    appMusicID: JSON.parse(localStorage.getItem('appMusicID')), //正在进行播放的音乐id
}

const actions = {
    async reqHomeMusicList(content) {
        let musicParamsList = await getAllMusicParamsList()
        content.commit("SETHOMEMUSICLIST", musicParamsList)
    },
    async reqAdudio({ commit }, musicID) {
        let result = await reqMusic(musicID)
        let audioImg = ''
        let audioName = ''
        for (let m of state.homeMusicList) {
            if (m.id == musicID) {
                audioImg = m.img
                audioName = m.name
            }
        }
        let audioUrl = result.data[0].url
        if (audioUrl == null) {
            return Promise.reject(new Error("该曲目已被网易云ban了呜呜呜"))
        }
        commit("GETAUDIOURL", [audioUrl, audioImg, audioName])
    },
    async reqNextAdudio({ commit }, musicID) {
        let newMusicID
        for (let index in state.homeMusicList) {
            if (state.homeMusicList[index].id == musicID) {
                newMusicID = state.homeMusicList[++index].id
            }
        }
        let result = await reqMusic(newMusicID)
        let audioImg = ''
        let audioName = ''
        for (let m of state.homeMusicList) {
            if (m.id == newMusicID) {
                audioImg = m.img
                audioName = m.name
            }
        }
        let audioUrl = result.data[0].url
        if (audioUrl == null) {
            for (let index in state.homeMusicList) {
                if (state.homeMusicList[index].id == newMusicID) {
                    newMusicID = state.homeMusicList[++index].id
                    result = await reqMusic(newMusicID)
                    for (let m of state.homeMusicList) {
                        if (m.id == newMusicID) {
                            audioName = m.name
                            audioImg = m.img
                        }
                    }
                    audioUrl = result.data[0].url
                    commit("GETAUDIOURL", [audioUrl, audioImg, audioName])
                    return newMusicID
                }
            }
        } else {
            commit("GETAUDIOURL", [audioUrl, audioImg, audioName])
            return newMusicID
        }
    },
    pasueMusic({ commit }) {
        commit("STOPMUSIC")
    },
}

const mutations = {
    STOPMUSIC(state) {
        state.isPlay = !state.isPlay
    },
    SETHOMEMUSICLIST(state, musicParamsList) {
        state.homeMusicList = musicParamsList
    },
    GETAUDIOURL(state, musicArr) {
        state.audioUrl = musicArr[0]
        localStorage.setItem('audioUrl', JSON.stringify(musicArr[0]))
        state.audioImg = musicArr[1]
        localStorage.setItem('audioImg', JSON.stringify(musicArr[1]))
        state.audioName = musicArr[2]
        localStorage.setItem('audioName', JSON.stringify(musicArr[2]))
        state.isPlay = true
        setTimeout(() => {
            localStorage.setItem('appMusicID', JSON.stringify(state.appMusicID))
        }, 500);

    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}