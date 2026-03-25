const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", function(req ,res) {

    res.json({
        message: "admin signup"
    })
})

adminRouter.get("/signin", function(req , res){

    res.json({
        message: "admin signin"
    })
});

adminRouter.post("/purchase", function(req, res){

    res.json({
        message: "admin purchase"
    })
});

adminRouter.get("/courses", function(req, res){

    res.json("course preview")
});


module.exports = {
    adminRouter: adminRouter
}

