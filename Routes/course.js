const {Router} = require("express");
const CreateRouter = Router();

    CreateRouter.post("/purchases", function(req , res){

        res.json ({
            message: "Signup endpoint"

        })
    })

    CreateRouter.get("/preview", function ( req, res)  {
        
        res.json ({
            message: "Course preview endpoint"
        })

    });




module.exports = {
    CreateRouter: CreateRouter
}