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
        let userComments = []
        for (let userComment of result.data) {
            if (userComment.comment) {
                for (let comment of userComment.comment) {
                    comment.username = userComment.username
                    userComments.push(comment)
                }
            }

        }
        let compare = function (time) {
            return function (a, b) {
                let counttime1, counttime2
                let year, month, day, hour, minute
                let value1 = a[time].split('-')
                let value2 = value1[2].split(' ')
                let value3 = value2[1].split(':')
                year = value1[0]
                month = value1[1]
                day = value2[0]
                hour = value3[0]
                minute = value3[1]
                counttime1 = parseInt(year) * 10000000 + parseInt(month) * 100000 + parseInt(day) * 10000 + parseInt(hour) * 100 + parseInt(minute)
                value1 = b[time].split('-')
                value2 = value1[2].split(' ')
                value3 = value2[1].split(':')
                year = value1[0]
                month = value1[1]
                day = value2[0]
                hour = value3[0]
                minute = value3[1]
                counttime2 = parseInt(year) * 10000000 + parseInt(month) * 100000 + parseInt(day) * 10000 + parseInt(hour) * 100 + parseInt(minute)
                return counttime2 - counttime1
            }
        }
        state.userComments = userComments.sort(compare('time'))
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}