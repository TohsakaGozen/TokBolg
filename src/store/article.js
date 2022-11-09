
import { reqArticles, upLoadArticle } from "@/api/index"
const state = {
    articleList: [],
    showList: []
}

const actions = {
    async getArticles(content, isSortUp) {
        let result = await reqArticles()
        result = JSON.stringify(result)
        result = JSON.parse(result)
        if (isSortUp == true || isSortUp == 'true') {
            content.commit('GETARTUCLES', [result, 1])
        } else {
            content.commit('GETARTUCLES', [result, 0])
        }

    },
    async upLoadArticle(content, formData) {
        console.log(formData)
        let result = await upLoadArticle(formData)
        if (result.ok == 1) {
            return '上传成功'
        } else {
            return Promise.reject(new Error('上传失败'))
        }
    },
}

const mutations = {
    GETARTUCLES(state, result) {
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
                counttime1 = parseInt(year) * 100000 + parseInt(month) * 10000 + parseInt(day) * 100 + parseInt(hour) * 10 + parseInt(minute)
                value1 = b[time].split('-')
                value2 = value1[2].split(' ')
                value3 = value2[1].split(':')
                year = value1[0]
                month = value1[1]
                day = value2[0]
                hour = value3[0]
                minute = value3[1]
                counttime2 = parseInt(year) * 100000 + parseInt(month) * 10000 + parseInt(day) * 100 + parseInt(hour) * 10 + parseInt(minute)
                if (result[1] == 1) {
                    return counttime2 - counttime1
                } else {
                    return counttime1 - counttime2
                }
            }
        }
        for (let t of result[0]) {
            let a = t.time.split(":")
            if (a[1].length == 1) {
                a[1] = 0 + a[1]
                a = a[0] + ":" + a[1]
                t.time = a
            }

        }
        state.articleList = result[0].sort(compare('time'))
        state.showList = []
        let i = 1
        let t = 1
        let str4 = []
        let onePage = {
            currentPage: 0,
            articles: []
        }
        state.articleList.forEach(article => {
            str4.push(article)
            if (i % 3 == 0) {
                onePage.currentPage = t
                onePage.articles = str4
                state.showList.push(onePage)
                onePage = {
                    currentPage: 0,
                    articles: []
                }
                str4 = []
                t++
            }
            i++
        });
        onePage.currentPage = t
        onePage.articles = str4
        state.showList.push(onePage)
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}