// const express = require("express");
// const Router = express.Router;     either use the below line or the above 2 , both do the same work 

const { Router } = require("express");
const {userModel, purchaseModel, courseModel} = require("../db"); // Added courseModel import for purchases route
const userRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require ("../config");
const { userMiddleware } = require("../middleware/user"); // Added userMiddleware import


userRouter.post("/signin", async  function(req, res){
    try { // Added try-catch for error handling
        const { email , password  } = req.body;
        // TODO: ideally password should be hashed and hence you cant compare the user provided password and the database password


            const user = await userModel.findOne ({
                email: email, 
                password: password,
            });
        
            if (user) {
                const token = jwt.sign({
                    id: user._id
                }, JWT_USER_SECRET);

                // Do cookie logic 

                res.json({
                    token: token
                
                })
            } else {
            res.status(403).json({
            message: "you're ready to signin from user.js " // Fixed typo: "signinn" -> "signin"
                     })
            }      
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

userRouter.post("/signup", async function(req, res){
    try { // Added try-catch for error handling
        const { email , password , FirstName, LastName } = req.body;

        // TODO: Hash password before storing (use bcrypt)
        // const hashedPassword = await bcrypt.hash(password, 10);

            await userModel.create ({
                email: email, 
                password: password, // Replace with hashedPassword
                FirstName: FirstName,
                LastName: LastName
            }
            )

            res.json({
            message: "you're ready to signup from user.js"
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});


// to view their purchasses
userRouter.get("/purchases", userMiddleware, async function(req, res){ // Added userMiddleware for authentication
    try { // Added try-catch for error handling
        const userId = req.userId;

        const purchases = await purchaseModel.find({
            userId
        });

        let purchasedCourseIds = [];

        for (let i = 0; i < purchases.length; i++) { // Fixed syntax error: removed comma, corrected condition
            purchasedCourseIds.push(purchases[i].courseId)
        }

        const coursesData = await courseModel.find({
            _id: { $in: purchasedCourseIds }
        })


            res.json({
                purchases,
                coursesData: coursesData // Fixed variable name: courseData -> coursesData
            })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = {
    userRouter: userRouter
}