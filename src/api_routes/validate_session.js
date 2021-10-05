module.exports = function(req, res, next) {
    if (req.session.id == res.session.id) {
        next();
    } else {
        res.status(403);
        res.end();
    }
}