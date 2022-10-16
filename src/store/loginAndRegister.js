
import { reqRegister, reqLogin } from "@/api/index"
const state = {


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
                return result.message
            } else {
                return Promise.reject(new Error(result.message))
            }
        } catch (error) {
            return Promise.reject(new Error('网络请求错误'))
        }
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}