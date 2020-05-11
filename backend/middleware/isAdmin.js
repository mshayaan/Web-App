function isAdmin (req, res, next) {
    if (!req.user.isAdmin) return res.status(403).send('Access denied.')
    next();
}

module.exports = isAdmin;

//401 Unauthorized (We send this when user doesn't have token)
//403 Forbidden (We send this when user is not admin)