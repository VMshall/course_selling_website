
function createUserRoutes(app) {

    app.post("/user/signup", function( req , res) {

        res.json({
            message: "you're in"
        })

    });

    app.post("/user/signin" , function( req , res) {

        res.json({
            message: "welcome back"
        })


    } );

    app.post("/user/purchase", function(req , res) {


        res.get ({

        })
    })

}

module.exports = {
    createUserRoutes: createUserRoutes
}