function createCourseRoutes(app) {

    app.get("/course/purchases", function(req , res){

        res.send ({

        })
    })

    app.get("/course/preview", function ( req, res)  {
        
        res.send ({

        })

    });


}

module.exports = {
    createCourseRoutes: createCourseRoutes
}