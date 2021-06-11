const User = require('../models/User')

module.exports = async (req, res) => { 
    console.log(req.body)
    User.findOne({ userid: req.body.id }, (error, user) => {
        console.log(user)
        if (user!=null) {
            res.send(false)
        }
        else {
            User.create({ userid: req.body.id, pw: req.body.pw })
            res.redirect('/')
        }
    })
}
