const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");
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


courseRouter.port("/purchase", userMiddleware , async function(req, res){

    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create ({
        userId,
        courseId
    })

    res.json ({
        message: "you've successfully bought the course"
    })
})

courseRouter.put("/courses", function(req, res){

    res.json ({
        message: "You're ready to preview"
    })
});

courseRouter.get("/preview",async  function(req, res){

    const courses = await courseModel.find({});


    res.json({
        courses
    })
    
});


module.exports = {
    courseRouter: courseRouter
}