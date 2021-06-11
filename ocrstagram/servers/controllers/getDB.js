const User = require('../models/User')
const Post = require('../models/Post')
const asyncHandler = require('express-async-handler');

module.exports = asyncHandler(async (req, res, next) => {
    let result = await User.find(
        { userid: req.body.userid }
    )

    const resultId = await User.findOne({userid:req.body.userid})
    const posts = await Post.find({'username':{_id:resultId._id}})
    // console.log(posts)
    res.send(posts)
})