const fs = require('fs')
const path = require('path')
const User = require('../models/User')

module.exports = (req, res, next) => {

    User.findOne({ userid: req.body.id }, (error, user) => {
        console.log(user)
        if (user) {
            console.log(req.body)
            if (req.body.pw === user.pw) {

                res.send(req.body.id)
                if (!fs.existsSync(`${path.resolve(__dirname, '..', '..', 'public/img')}/${req.body.id}`)) {
                    console.log('create folder')
                    fs.mkdirSync(`${path.resolve(__dirname, '..', '..', 'public/img')}/${req.body.id}`)

                }
            }
            else {
                res.redirect('/user/login')
            }

        }
        else {
            res.redirect('/user/login')

        }
    })
    // console.log(`${path.resolve(__dirname,'..','..','public/img')}/${req.body.id}`)

}