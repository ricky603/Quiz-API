function succes(res, statusCode, data) {
  return res.status(statusCode).json({
    status: true,
    data: data
  });
}

module.exports = succes;
