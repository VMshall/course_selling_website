const mongoose = require("mongoose");
mongoose.connect ("")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = Schema({
    email: {type: String , unique: true},
    password: String,
    FirstName: String,
    LastName: String,
});


const adminSchema = Schema ({
    email: {type: string, unique: true},
    password: String,
    FirstName: String,
    LastName: String

});


const courseSchema = Schema ({
    title: String,
    description: String,
    price: Number,
    creatorId: ObjectId,
    imageurl: String

});


const purchaseSchema = Schema ({
    courseId: ObjectId,
    userId: ObjectId

});

const userModel = mongoose.model ("user", userSchema);
const adminModel = mongoose.model ("admin", adminSchema);
const courseModel = mongoose.model ("course", courseSchema);
const purchasseModel = mongoose.model ("purchase", purchaseSchema);


module.export = {
    userModel,
    courseModel,
    adminModel,
    purchasseModel
} 