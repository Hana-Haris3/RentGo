const { name } = require("ejs");
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:String,
        select:false
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    dateOfBirth:{
        type:Date
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    drivingLiscenceNumber:{
        type:String
    },
    drivingLiscenceValidity:{
        type:Date
    },
    AadharNumber:{
        type:String
    },
    AadharImage:{
        type:String
    },
    role:{
        type:String,
        default:'User'
    }
})

module.exports = mongoose.model('User',userSchema)