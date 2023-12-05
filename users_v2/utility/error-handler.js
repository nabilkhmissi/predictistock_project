module.exports = (err, req, res, next) => {
    res.status(500).status(err.status || 500).send({ message: err.message });
}