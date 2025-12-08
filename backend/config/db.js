const { default: mongoose, connection } = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(process.env.dbURI)
        console.log('database connected!!')    
    } catch (error) {
        console.log('database connection failed!!')
        console.log(error)
    }
}

module.exports = connectDB