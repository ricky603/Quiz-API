const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    username: {
        type: 'string',
        required: true,
        unique: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    }
}) 

const User = mongoose.model('User', userSchema)
module.exports = User