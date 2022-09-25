import { reqMyMusicList, reqMusicID, reqMusic } from "@/api/index"
//获取与参数即网易云id的用户的歌单列表--该歌单列表可以获取任意歌单的列表ID


let getAllMusicParamsList = async function () {
    let result = await reqMyMusicList("1393061643")
    let playListId = result.playlist[0].id
    result = await reqMusicID(playListId)
    let musicParams = {}
    let musicParamsList = []
    for (let music of result.songs) {
        musicParams = {
            id: music.id,
            name: music.name
        }
        musicParamsList.push(musicParams)
    }
    return musicParamsList
}

// .then((values) => {
//     let playListId = values.playlist[0].id
//     return playListId
// }).then((playListId) => {
//     reqMusicID(playListId).then((values) => {
//         let musicParams = {}
//         let musicParamsList = []
//         for (let music of values.songs) {
//             musicParams = {
//                 id: music.id,
//                 name: music.name
//             }
//             musicParamsList.push(musicParams)
//             return musicParamsList
//         }
//     })
// })

// .then((musicParamsList) => {
//     reqMusic(musicParamsList[9].id).then((values) => {
//         console.log(values.data[0].url)
//     })
// })
export { getAllMusicParamsList }
//参数即为歌单id，里面可以获取该歌单中任意音乐的id

//传递获取到的音乐id，可得到该音乐的播放网络地址（国内才可使用，如果挂梯子会报错）
