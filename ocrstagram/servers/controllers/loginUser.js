const fs = require('fs')
const path = require('path')

module.exports = (req, res, next) => {
    res.send(req.body.id)
    // console.log(`${path.resolve(__dirname,'..','..','public/img')}/${req.body.id}`)
    if(!fs.existsSync(`${path.resolve(__dirname,'..','..','public/img')}/${req.body.id}`)){
        console.log('create folder')
        fs.mkdirSync(`${path.resolve(__dirname,'..','..','public/img')}/${req.body.id}`)
    }
}