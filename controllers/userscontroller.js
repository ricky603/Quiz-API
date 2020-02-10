const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const succes = require('../helpers/succes.js')
const error = require('../helpers/error.js')
const jwt = require('jsonwebtoken')

let create = (req, res) => {
    let {username, email, password} = req.body
    let user = new User({
        username,
        email,
        password: bcrypt.hashSync(password,10)
    })

    user.save()
    .then(() => {
        succes(res, 201, user)
    })
    .catch((err) => {
        error(res, 400, err)
    })
}

let find = (req, res) => {
    User.find()
    .then(data => {
        succes(res, 200, data)
    })
    .catch(err => {
        error(res, 422, err)
    })
}

let login = (req, res) => {
    User.findOne({username:req.body.username} || {email:req.body.email})
    .then((data) => {
        let {password} = req.body
        let loginPass = bcrypt.compareSync(password, data.password)
        if (loginPass === true) {
            let payload = jwt.sign({_id: data._id, email: data.email}, process.env.SECRET_KEY)
            res.status(200).json({
                status: true,
                data: {
                    _id: data._id,
                    email: data.email,
                    token: payload
                }
            })
        } else {
            error(res, 400, 'Wrong Password!')
        }
    })
    .catch((err) => {
        error(res, 404, err)
    })
}

module.exports = {
    create,
    find,
    login
}