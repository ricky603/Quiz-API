const mongoose = require('mongoose')
const Schema = mongoose.Schema

let questionSchema = new Schema({
    quiz_id: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    question: {
        type: 'string',
        required: true
    },
    option: {
        a: {
            type: 'string',
            required: true
        },
        b: {
            type: 'string',
            required: true
        },
        c: {
            type: 'string',
            required: true
        },
        d: {
            type: 'string',
            required: true
        }
    },
    answer: {
        type: 'string',
        required: true,
        enum: ['a', 'b','c','d']
    }
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question