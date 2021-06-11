const User = require('../models/User')

module.exports = async (req, res) => { 
    console.log(req.body)
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            res.redirect('/')
        }
        else {
            User.create({ userid: req.body.id, pw: req.body.pw })
        }
    })
}
