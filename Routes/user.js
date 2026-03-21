const {Router} = require("express");
const UserRouter = Router();


    UserRouter.post("/signup", function( req , res) {

        res.json({
            message: "you're in"
        })

    });

   UserRouter.post("/signin" , function( req , res) {

        res.json({
            message: "signup endpoint"
        })


    } );

    UserRouter.get("/purchase", function(req , res) {


        res.json({
            message: "welcome back"
        })
    })


module.exports = {
    UserRouter: UserRouter
}