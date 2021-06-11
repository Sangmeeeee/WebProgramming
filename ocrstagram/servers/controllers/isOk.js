const User = require('../models/User')
const Post = require('../models/Post')
const asyncHandler = require('express-async-handler')

module.exports = asyncHandler(async (req, res, next) => {
    let result = await User.find(
        { userid: req.body.userid}
    )

    if (result.length == 0)
        res.send(false)
    else
        res.send(true)
    }
)