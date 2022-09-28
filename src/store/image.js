
import { reqImages, reqArticleImages } from "@/api/index"
const state = {
    imgaesUrlList: [],
    articleImages: [],

}

const actions = {
    async getImagesList(content) {
        let result = await reqImages()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        content.commit('GETIMAGESLIST', result)
    },
    async getArticleImages(content) {
        let result = await reqArticleImages()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        content.commit('GETARTICLEIMAGES', result)
    }
}

const mutations = {
    GETIMAGESLIST(state, result) {
        for (let i in result) {
            result[i] = require("../../" + result[i] + ".jpg")
        }
        result.reverse()
        state.imgaesUrlList = result

    },
    GETARTICLEIMAGES(state, result) {
        for (let i in result) {
            result[i] = require("../../" + result[i] + ".jpg")
        }
        result.reverse()
        state.articleImages = result

    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}