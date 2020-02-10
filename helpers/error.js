function error(res, statusCode, error) {
  return res.status(statusCode).json({
    status: false,
    error: error
  });
}

module.exports = error;
