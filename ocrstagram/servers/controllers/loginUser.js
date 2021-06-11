const fs = require('fs')
const path = require('path')
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req, res, next) => {
    
    User.findOne({ userid: req.body.id }, (error, user) => {
        console.log(user)
        if (user) {
            console.log(req.body)
            bcrypt.compare(req.body.pw, user.pw, (error, same) => {
                console.log(same)
                if (same) {
                    res.send(true)
                    if (!fs.existsSync(`${path.resolve(__dirname, '..', '..', 'public/img')}/${req.body.id}`)) {
                        console.log('create folder')
                        fs.mkdirSync(`${path.resolve(__dirname, '..', '..', 'public/img')}/${req.body.id}`)
                    }
                }
                else {
                    res.send(false)
                }
            })
        }
        else {
            res.send(false)
        }
    })
    // console.log(`${path.resolve(__dirname,'..','..','public/img')}/${req.body.id}`)

}