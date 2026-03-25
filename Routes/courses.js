const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/signup", function(req, res){
    res.json({
        message: "you're ready to signup "
    })

});

courseRouter.post("/signin", function(req, res){

    res.json({
        message: "You're ready to signin"
    })

});

courseRouter.post("/courses", function(req, res){

    res.json ({
        message: "You're ready to preview"
    })
});

courseRouter.get("/courses/bulk", function(req, res){

    res.json ({
        message: "You're ready to preview"
    })
});

courseRouter.put("/courses", function(req, res){

    res.json ({
        message: "You're ready to preview"
    })
});


module.exports = {
    courseRouter: courseRouter
}