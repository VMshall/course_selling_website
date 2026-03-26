const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");
// const user = require("../Routes/user");

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_SECRET);

    if (decoded) {
        req.userId = decoded.id;
        next ()

    } else {
        res.status(403).json({
            message: " You're not signed in through user.js in middlewares"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}