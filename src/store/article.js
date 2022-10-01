
import { reqArticles, upLoadArticle } from "@/api/index"
const state = {
    articleList: [],

}

const actions = {
    async getArticles(content) {
        let result = await reqArticles()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        content.commit('GETARTUCLES', result)
    },
    async upLoadArticle(content, formData) {
        let result = await upLoadArticle(formData)
        result = JSON.stringify(result)
        result = JSON.parse(result)
        content.commit('GETARTUCLES', result)
    }
}

const mutations = {
    GETARTUCLES(state, result) {
        state.articleList = result
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}