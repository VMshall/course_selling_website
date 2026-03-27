// const express = require("express");
// const Router = express.Router;     either use the below line or the above 2 , both do the same work 

const { Router } = require("express");
const {userModel, purchaseModel} = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require ("../config");


userRouter.post("/signin", async  function(req, res){
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
        message: "you're ready to signinn from user.js "
                 })
        }      
});

userRouter.post("/signup", async function(req, res){
   const { email , password , FirstName, LastName } = req.body;

        await userModel.create ({
            email: email, 
            password: password,
            FirstName: FirstName,
            LastName: LastName
        }
        )

        res.json({
        message: "you're ready to signupp rom user.js "
    })
});


// to view their purchasses
userRouter.get("/purchases", async function(req, res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    });

    let purchasedCourseIds = [];

    for ( let i=0 , i< purchases[i].length; i++ ){
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })
    

        res.json({
            purchases,
            courseData
        })
});

module.exports = {
    userRouter: userRouter
}