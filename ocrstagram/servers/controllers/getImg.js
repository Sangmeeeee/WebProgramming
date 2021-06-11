const Post = require('../models/Post')
const asyncHandler = require('express-async-handler');
const path = require('path')
const url = require('url')

module.exports = asyncHandler(async (req, res, next) => {
    let query = url.parse(req.url, true).query;
    // console.log(query)
    let imgPath = path.resolve(__dirname,'..','..','public/img', query.image)

    res.sendFile(imgPath)
})