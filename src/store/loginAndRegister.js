
import { reqRegister, reqLogin, checkToken } from "@/api/index"
const state = {
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || '',
}

const actions = {
    async register({ commit }, userInfo) {
        try {
            let result = await reqRegister(userInfo)
            if (result.status == 0) {
                return '注册成功'
            } else {
                return Promise.reject(new Error(result.message))
            }
        } catch (error) {
            return Promise.reject(new Error('网络请求错误'))
        }

    },
    async login({ commit }, userInfo) {
        try {
            let result = await reqLogin(userInfo)
            if (result.status == 0) {
                console.log(result)
                localStorage.setItem('token', result.token)
                localStorage.setItem('userInfo', JSON.stringify(result.userInfo))
                state.token = result.token
                state.userInfo = result.userInfo
                return result.message
            } else {
                return Promise.reject(new Error(result.message))
            }
        } catch (error) {
            return Promise.reject(new Error('网络请求错误'))
        }
    },
    exitLogin({ commit }) {
        commit("EXITLOGIN")
    },
    async checkToken() {
        let result = await checkToken()
        if (result.status == 0) {
            return result.message
        } else {
            return Promise.reject(new Error(result.message))
        }
    }
}

const mutations = {
    EXITLOGIN(state) {
        state.token = ''
        state.userInfo = ''
        localStorage.clear('token')
        localStorage.clear('userInfo')
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}