
import { reqImages } from "@/api/index"
const state = {
    imgaesUrlList: []
}

const actions = {
    async getImagesList(content) {
        let result = await reqImages()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        content.commit('GETIMAGESLIST', result)
    }
}

const mutations = {
    GETIMAGESLIST(state, result) {
        for (let i in result) {
            result[i] = require("../../" + result[i] + ".jpg")
        }
        result.reverse()
        state.imgaesUrlList = result

    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}