const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_Admin_SECRET } = require("../config");
const courses = require("./courses");
// const admin = require("../Routes/admin");
const { adminMiddleware } = require("../middleware/admin")


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

    if (admin) {
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


adminRouter.post("/course", async function(req, res){
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
        courseId: Course._id
    })

});

adminRouter.get("/course/bulk", async function(req, res){
    const adminId= req.userId;

    const course = await courseModel.find({
        creatorId: adminId
    });

    res.json({
        message: "Course updated",
        courses
    })
})

adminRouter.put("/course",adminMiddleware , async function(req, res){
    const adminId = req.userId;

    const {title , description , price, imageUrl, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    
    }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })    
    res.json({
        message: "Course Updated",
        courseId: course._id
    })
});

module.exports = {
    adminRouter: adminRouter
}

