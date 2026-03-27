const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_Admin_SECRET } = require("../config");
// const courses = require("./courses"); // Removed unused import
const { adminMiddleware } = require("../middleware/admin")


adminRouter.post("/signup", async function(req ,res) {
    try { // Added try-catch for error handling
        const { email, password , FirstName, LastName } = req.body;

        // TODO: Hash password before storing (use bcrypt)
        // const hashedPassword = await bcrypt.hash(password, 10);

        await adminModel.create ({
            email: email,
            password: password, // Replace with hashedPassword
            FirstName: FirstName,
            LastName: LastName
        })

        res.json({
            message: "admin signup"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

adminRouter.post("/signin", async function(req , res){
    try { // Added try-catch for error handling
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
            message: "admin signin",
            token: token
        })

        } else {
            res.status(403).json({
                message: "invalid credentials"
            })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});


adminRouter.post("/course", adminMiddleware, async function(req, res){
    try { // Added try-catch for error handling
        const adminId = req.userId;

        const { title , description , imageUrl, CreatorId, price } = req.body;

        const Course = await courseModel.create({
            title: title,
            imageUrl: imageUrl,
            price: price,
            creatorId: adminId,
            description: description

        })

        res.json ({
            message: "Course Created",
            courseId: Course._id
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }

});

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res){
    try { // Added try-catch for error handling
        const adminId= req.userId;

        const course = await courseModel.find({
            creatorId: adminId
        });

        res.json({
            message: "Courses fetched",
            course: course
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

adminRouter.put("/course",adminMiddleware , async function(req, res){
    try { // Added try-catch for error handling
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
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = {
    adminRouter: adminRouter
}

