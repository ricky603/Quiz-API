const mongoose = require('mongoose')
const Schema = mongoose.Schema

let quizSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quizTitle: {
        type: 'string',
        required: true
    },
})

let Quiz = mongoose.model('Quiz', quizSchema)

module.exports = Quiz