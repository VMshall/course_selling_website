const express = require("express");
const { CreateRouter } = require("./Routes/course");
const { UserRouter } = require("./Routes/user");

const {  adminRouter } = require("./Routes/admin");
const app = express();

app.use("/app/v1/user", UserRouter); //routes can be used for every version , one does not have to make a seperate version of every update , one can directly change from the index 
app.use("/admin", adminRouter);
app.use("/app/v1/course", CreateRouter);



createCourseRoutes(app);
createUserRoutes(app);
app.listen(3000);

