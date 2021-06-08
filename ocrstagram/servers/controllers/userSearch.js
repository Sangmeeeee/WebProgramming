const User = require('../models/User')

module.exports = async (req,res,next) => {
    console.log(req.body)
    let result = await User.find(
        { userid:{$regex:req.body.search}}
    )
    console.log(result)
    res.send(result)
}