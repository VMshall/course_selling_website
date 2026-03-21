const express = require("express");
const { CreateRouter } = require("./Routes/course");
const { UserRouter } = require("./Routes/user");

const {  adminRouter } = require("./Routes/admin");
const app = express();

// const jsonwebtoken = require("jsonwebtoken");
// const jWT_SECRET= jsonwebtoken("anything");

app.use("/user", UserRouter);
app.use("/admin", adminRouter);
app.use("/course", CreateRouter);

createCourseRoutes(app);
createUserRoutes(app);
app.listen(3000);

