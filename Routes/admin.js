const { Router } = require("express");
const Module = require("node:module");
const adminRouter = Router();


adminRouter.post("./signin", function(req, res) {

    res.json ({
        message: "Signup endpoint"
 })

});

adminRouter.post("./signup", function(req, res) {

    res.json({
        message: "welcome back"
    })

});

adminRouter.get("./preview", function(req,res){


    res.json ({

        message: "Preview"
    })
});

adminRouter.get("./course/bulk", function(req,res){

    res.json({
        message: "signup endpoint"
    })
})

Module.exports = {
    adminRouter: adminRouter
}