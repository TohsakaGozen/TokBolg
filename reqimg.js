const express = require("express");
const fs = require("fs");
const app = express()
const path = require('path')
const cors = require('cors')
app.use(cors())
app.listen(3001, () => {
    console.log("3001端口已经开发了")
})

const articleImages = function () {
    let imagesUrl = [];
    const imagefileUrl = `public/images/recordImages`
    fs.readdir('./public/images/recordImages', 'utf-8', (err, files) => {
        files.forEach((filename) => {
            //获取当前文件的绝对路径
            const filedir = path.join(imagefileUrl, filename);
            imagesUrl.push(filedir.replace(".jpg", '').replace(".jpg", '').replace(/\\/img, '/'))
            // 最后打印的就是完整的文件路径了
        })
        app.get('/articleImages', (req, res) => {
            res.send(imagesUrl)
        })
    })
}


const ImagesUrls = function () {
    let imagesUrl = [];
    const imagefileUrl = `public/images/showImages`
    fs.readdir('./public/images/showImages', 'utf-8', (err, files) => {
        files.forEach((filename) => {
            //获取当前文件的绝对路径
            const filedir = path.join(imagefileUrl, filename);
            imagesUrl.push(filedir.replace(".jpg", '').replace(".jpg", '').replace(/\\/img, '/'))
            // 最后打印的就是完整的文件路径了
        })
        app.get('/images', (req, res) => {
            res.send(imagesUrl)
        })
    })
}
ImagesUrls()
articleImages()




