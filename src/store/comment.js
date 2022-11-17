import { reqUserComments, upLoadComments } from '@/api/index'
const state = {
    userComments: []
}

const actions = {
    async reqComments(context) {
        let result = await reqUserComments()
        if (result.status == 0) {
            context.commit("REQCOMMENTS", result)
        }
    },
    async upLoadComment(context, comment) {
        console.log(comment)
        let result = await upLoadComments(comment)
        if (result.status == 0) {
            console.log(result)
            return result
        } else {
            return Promise.reject(new Error(result.message))
        }
    }

}

const mutations = {
    REQCOMMENTS(state, result) {
        state.userComments = result.data
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}