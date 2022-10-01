import { reqgithubRepos } from '@/api/index'
const state = {
    demoList: [],

}

const actions = {
    async getDemos(content) {
        let result = await reqgithubRepos('TohsakaGozen')
        console.log(result)
        result = JSON.stringify(result)
        result = JSON.parse(result)
        content.commit('GETDEMOS', result)
    },
}

const mutations = {
    GETDEMOS(state, result) {
        state.demoList = result
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}