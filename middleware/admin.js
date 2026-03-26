const jwt = require("jsonwebtoken");
const {JWT_Admin_SECRET } = require ("../config");
const admin = require("../Routes/admin");



function adminMiddleware(req, res , next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_Admin_SECRET);

    if (decoded) {
        req.userId = decoded.id;
        next ()
    }else {
        res.status(403).json ({
            message: "You failed to signin through admin.js in middleware"
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}