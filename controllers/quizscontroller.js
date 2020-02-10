const Quiz = require('../models/quiz.js')
const succes = require('../helpers/succes.js')
const error = require('../helpers/error.js')

let create = (req, res) => {
    var author = req.headers.authorization
    var {quizTitle} = req.body
    var quiz = new Quiz ({
        author,
        quizTitle
    })
    quiz.save()
    .then(() => {
        succes(res, 201, quiz)
    })
    .catch((err) => {
        error(res, 400, err)
    })
}

let find = (req, res) => {
    Quiz.find()
    .then((data) => {
        succes(res, 200, data)
    })
    .catch((err) => {
        error(res, 422, err)
    })
}
    
module.exports = {
    create,
    find
}