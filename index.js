const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const router = require('./router.js')
const morgan = require('morgan')
const dotenv = require('dotenv')

const {
    notFound,
    internalServerError
} = require('./errorhandling.js')

dotenv.config()
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1', router)
mongoose.connect('mongodb://localhost/questionAPI', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connected to database!')
})
.catch((err) => {
    console.log(err)
})
app.get('/', function(req, res) {
    res.status(200).json({
        status: true,
        data:'hello World'
    })
})
// Exception Handler middleswares
app.use(notFound)
app.use(internalServerError)

app.listen(port, () => console.log(`connected on port ${port}!`))

