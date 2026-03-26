const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_Admin_SECRET } = require("../config");

adminRouter.post("/signup", async function(req ,res) {

    const { email, password , FirstName, LastName } = req.body;
    await adminModel.create ({
        email: email,
        password: password,
        FirstName: FirstName,
        LastName: LastName
    })

    res.json({
        message: "admin signup"
    })
})

adminRouter.get("/signin", async function(req , res){
    const { email, password } = req.body;

    const admin = await adminModel.findOne ({
        email: email,
        password: password
});

    if (user) {
        const token = jwt.sign({
            id: admin._id,
        }, JWT_Admin_SECRET)

    
    res.json({
        message: "admin signin"
    })

    } else {
        res.status(403).json({
            message: "invalid credentials"
        })
    }
});

adminRouter.post("/purchase", function(req, res){
     const courseId = req.courseId

     const {userId , CreatorId , CourseId} = req.body;

     const purchase = await purchaseModel.findOne {

        userId: ......,
        CreatorId : adminId,
        courseId: courseId
     }
});

adminRouter.get("/courses", async function(req, res){
    const adminId = req.userId;

    const { title , description , imageUrl, CreatorId, price } = req.body;

    const Course = await courseModel.create({
        title: title,
        imageUrl: imageUrl,
        price: price,
        creatorid: adminId,
        description: description

    })

    res.json ({
        message: "Course Created",
        courseId: course._id
    })

});


module.exports = {
    adminRouter: adminRouter
}

