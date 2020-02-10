var express = require('express')
var router = express.Router()
const authenticate = require('./middlewares/authenticate.js')

const user = require('./controllers/userscontroller.js')
router.post('/users', user.create)
router.get('/users', user.find)
router.post('/users/login', user.login)

const quiz = require('./controllers/quizscontroller.js')
router.post('/quizs', authenticate, quiz.create)
router.get('/quizs', quiz.find)

const question = require('./controllers/questionscontroller.js')
router.post('/questions/:_id', question.create)
router.get('/questions/findByQuizId/:quiz_id', question.findByQuizId)
router.put('/questions/answering/:quiz_id', question.answer)
module.exports = router