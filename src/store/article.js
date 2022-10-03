
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
        console.log(formData)
        let result = await upLoadArticle(formData)
        if (result.ok != 1) {
            return Promise.reject(new Error('上传失败'))
        } else {
            return '上传成功'
        }
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