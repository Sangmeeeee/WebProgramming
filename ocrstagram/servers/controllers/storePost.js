const Post = require('../models/Post')
const User = require('../models/User')

module.exports = (req, res, next) => { // id랑 파일이 같이옴
    let image = req.files.img
    let id = req.params.id

    User.findOne({userid: id}, (error, user) => {
        let _id = user._id
        console.log(_id)
        Post.create({
            text:req.body.text,
            image : '/img/' + image.name,
            username : _id
        })
        res.send('ok')
    })
}