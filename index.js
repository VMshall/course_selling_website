const express = require("express");
const { CreateRouter } = require("./Routes/course");
const { UserRouter } = require("./Routes/user");

const {  adminRouter } = require("./Routes/admin");
const app = express();

app.use("/user", UserRouter);
app.use("/admin", adminRouter);
app.use("/course", CreateRouter);

createCourseRoutes(app);
createUserRoutes(app);
app.listen(3000);

