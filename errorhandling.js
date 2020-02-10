exports.notFound = (req, res) => {
    res.status(404).json({
        status: false,
        errors: 'wrong endpoit'
    })
}

exports.internalServerError = (err, req, res, next) => {
    res.status(500).json({
        status: false,
        errors: err.message
    })
}