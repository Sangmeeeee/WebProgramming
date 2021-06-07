const User = require('../models/User')
const fs = require('fs')
const  mongoose  = require('mongoose')

module.exports = async (req,res,next) => {
    console.log(req.body)
    let result = await User.find(
        { userid:{$regex:req.body.search}}
        // $regex:"sd"
    )
    // let result = await User.find({})
    console.log(result)
    res.send(result)
}