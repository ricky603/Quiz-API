const jwt = require('jsonwebtoken')

let authenticate = (req, res, next) => {
    let token = req.headers.authorization
    try {
        let payload = jwt.verify(token, process.env.SECRET_KEY)
        req.headers.authorization = payload._id
        next()
    }
    catch(err) {
        res.status(401).json({
            status: false,
            errors: 'invalid token'
        })
    }
}

module.exports = authenticate