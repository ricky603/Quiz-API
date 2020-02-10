const Question = require('../models/question.js')
const succes = require('../helpers/succes.js')
const error = require('../helpers/error.js')

let create = (req, res) => {
    var question = new Question({
        quiz_id: req.params._id,
        question: req.body.question,
        option: {
            a: req.body.option.a,
            b: req.body.option.b,
            c: req.body.option.c,
            d: req.body.option.d
        },
        answer: req.body.answer
    })
    question.save()
    
    .then(() => {
        succes(res, 201, question)
    })
    .catch((err) => {
        error(res, 422, err)
    })
}
let findByQuizId = (req, res) => {
    Question.find({quiz_id: req.params.quiz_id})
    .then(data => {
        succes(res, 201, data)
    })
    .catch(err => {
        error(res, 400, err)
    })
}
let answer = (req, res) => {
    let score = 0
    Question.findOne({quiz_id: req.params.quiz_id})
    .then(data => {
        Question.findOne({_id: req.body._id})
        .then(data => {
            let {option} = req.body
            if (option === data.answer) {
                score += 1
                res.status(200).json({
                    status: true,
                    message: 'Correct answer'
                })
            } else {
                res.status(200).json({
                    status: true,
                    message: 'Wrong Answer',
                    answer: data.answer
                })
            }
        })
        .catch((err) => {
            error(res, 400, err)
        })
    })
    .catch(err => {
        error(res, 400, err)
    })
}

module.exports = {
    create,
    answer,
    findByQuizId
}