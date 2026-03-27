const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user"); // Added userMiddleware import

courseRouter.post("/courses", function(req, res){

    res.json ({
        message: "You're ready to preview"
    })
});


courseRouter.post("/purchase", userMiddleware , async function(req, res){
    try { // Added try-catch for error handling
        const userId = req.userId;
        const courseId = req.body.courseId;

        await purchaseModel.create ({
            userId,
            courseId
        })

        res.json ({
            message: "you've successfully bought the course"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

courseRouter.put("/courses", function(req, res){

    res.json ({
        message: "You're ready to preview"
    })
});

courseRouter.get("/preview",async  function(req, res){
    try { // Added try-catch for error handling
        const courses = await courseModel.find({});


        res.json({
            courses
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }

});


module.exports = {
    courseRouter: courseRouter
}