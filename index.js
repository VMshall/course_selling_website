const express = require("express");
const mongoose = require("mongoose");
const { CreateRouter } = require("./Routes/course");
const { UserRouter } = require("./Routes/user");
const {  adminRouter } = require("./Routes/admin");

const app = express();


app.use("/app/v1/user", UserRouter); //routes can be used for every version , one does not have to make a seperate version of every update , one can directly change from the index 
app.use("/admin", adminRouter);
app.use("/app/v1/course", CreateRouter);


async function main () {
    //explore dotenv to figure out enviornment variables seperately 
    await mongoose.connect("mongodb://admin:password@localhost:27017/test?authSource=admin");
    app.listen(3000);
    console.log("connected")
}

createCourseRoutes(app);
createUserRoutes(app);
app.listen(3000);

