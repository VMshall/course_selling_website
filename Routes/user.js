// const express = require("express");
// const Router = express.Router;     either use the below line or the above 2 , both do the same work 

const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signin", function(req, res){

        res.json({
        message: "you're ready to signinn "
    })
});

userRouter.post("/signup", function(req, res){

        res.json({
        message: "you're ready to signupp "
    })
});

userRouter.get("/purchases", function(req, res){

        res.json({
        message: "you're ready to purchase "
    })
});

module.exports = {
    userRouter: userRouter
}