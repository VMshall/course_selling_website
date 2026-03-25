const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;



const userSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    FirstName: String,
    LastName: String
});


const adminSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    FirstName: String,
    LastName: String
});

const courseSchema = new Schema ({
    title: String,
    description: String,
    creatorId: ObjectId ,
    imageUrl: String,
    price: Number
});

const purchaseSchema = new Schema ({
    userId: ObjectId,
    courseId: ObjectId,
    creatorId: ObjectId
});


const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
    adminModel,
    courseModel,
    userModel,
    purchaseModel
}