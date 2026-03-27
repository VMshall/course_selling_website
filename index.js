require('dotenv').config()
console.log(process.env.MONGO_URL);
const express = require("express");
const mongoose = require("mongoose");


const {userRouter} = require("./Routes/user");
const {courseRouter} = require("./Routes/courses");
const {adminRouter} = require("./Routes/admin");
// const admin = require("./Routes/admin");
const app = express();
app.use(express.json());


app.use("/user", userRouter);
app.use("/courses", courseRouter);
app.use("/admin", adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DB connected");
        app.listen( 3000  );
        console.log("connected");
    }).catch((err) => {
        console.log("DB connection failed", err);
    });
}

main()

