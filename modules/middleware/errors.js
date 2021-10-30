exports.errorLogger = (err, req, res, next) => {
    console.error('\x1b[31m', err) // adding some color to our logs
    next(err) // calling next middleware
}
  
exports.errorResponder = (err, req, res, next) => {
    res.header("Content-Type", 'application/json')
    // console.log(req);
    err.path = req.url;
    res.status(err.statusCode).send(JSON.stringify(err, null, 4)) // pretty print
}

exports.invalidPathHandler = (req, res, next) => {
    res.redirect('/error')
}
