const Post = require('../models/Post')
const User = require('../models/User')
const path = require('path')
const fs = require('fs')

module.exports = async (req, res, next) => { // id랑 파일이 같이옴
    let img = req.files.img
    let id = req.params.id

    let temp = new Date().getTime().toString()
    let imgPath = path.resolve(__dirname,'..','..',`public/img/${req.params.id}`,temp+'.jpg')

    img.mv(imgPath, async(err) => {
        User.findOne({userid: id}, (error, user) => {
            let _id = user._id
            Post.create({
                text:req.body.text,
                image : '/img/' + temp,
                username : _id
            })
            res.send('ok')
        })
    })
}