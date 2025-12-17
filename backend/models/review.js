const { default: mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    ratings:{
        type:Number
    },
    review:{
        type:String
    },
    date:{
        type:String
    }
})
module.exports = mongoose.model('Review',reviewSchema)