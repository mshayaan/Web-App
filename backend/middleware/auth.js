const jwt = require('jsonwebtoken');
// const config = require('config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided');
    try {
        const decoded = jwt.verify(token, "jwtPrivateKey"); //returns a decoded payload if valid(if not valid it throws an exception)
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }


}
module.exports = auth;