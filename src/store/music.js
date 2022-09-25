import { getAllMusicParamsList } from '@/util/Mymusic/reqMusic'
import { reqMusic } from "@/api/index"
const state = {
    myMusicList: [],
    homeMusicList: [],
    audioUrl: ''
}

const actions = {
    async reqHomeMusicList(content) {
        let musicParamsList = await getAllMusicParamsList()
        content.commit("SETHOMEMUSICLIST", musicParamsList)
    },
    async reqAdudio({ commit }, musicID) {
        let result = await reqMusic(musicID)
        let audioUrl = result.data[0].url
        if (audioUrl == null) {
            return Promise.reject(new Error("该曲目已被网易云ban了呜呜呜"))
        }
        commit("GETAUDIOURL", audioUrl)
    },
    async reqNextAdudio({ commit }, musicID) {
        let newMusicID
        for (let index in state.homeMusicList) {
            if (state.homeMusicList[index].id == musicID) {
                newMusicID = state.homeMusicList[++index].id
            }
        }
        let result = await reqMusic(newMusicID)
        let audioUrl = result.data[0].url
        if (audioUrl == null) {
            for (let index in state.homeMusicList) {
                if (state.homeMusicList[index].id == newMusicID) {
                    newMusicID = state.homeMusicList[++index].id
                    result = await reqMusic(newMusicID)
                    audioUrl = result.data[0].url
                    commit("GETAUDIOURL", audioUrl)
                    return newMusicID
                }
            }
        } else {
            commit("GETAUDIOURL", audioUrl)
            return newMusicID
        }
    }
}

const mutations = {
    SETHOMEMUSICLIST(state, musicParamsList) {


        state.homeMusicList = musicParamsList


        console.log(state.homeMusicList)

    },
    GETAUDIOURL(state, audioUrl) {
        state.audioUrl = audioUrl
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}