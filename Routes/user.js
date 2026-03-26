// const express = require("express");
// const Router = express.Router;     either use the below line or the above 2 , both do the same work 

const { Router } = require("express");
const {userModel} = require("../db");
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

userRouter.get("/purchases", function(req, res){

        res.json({
        message: "you're ready to purchase from user.js"
    })
});

module.exports = {
    userRouter: userRouter
}