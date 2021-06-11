const Post = require('../models/Post')
const asyncHandler = require('express-async-handler');
const path = require('path')
const url = require('url')
const fs = require('fs')

module.exports = asyncHandler(async (req, res, next) => {
    let query = url.parse(req.url, true).query;
    console.log(query)
    let imgPath = path.resolve(__dirname,'../../public')
    imgPath += query.image
    console.log(imgPath)

    res.sendFile(imgPath)
})