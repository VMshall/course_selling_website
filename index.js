const express = require("express");
const { createCourseRoutes } = require("./Routes/course");
const { createUserRoutes } = require("./Routes/user");
const app = express();

const jsonwebtoken = require("jsonwebtoken");



const jWT_SECRET= jwt("anything");



createCourseRoutes(app);
createUserRoutes(app);
app.listen(3000);

