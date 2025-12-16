const Car = require('../models/Car')

exports.viewCars = async (req,res)=>{
    try {
       const car = await Car.find()
       console.log(car)
       return res.json({cars:car,success:true})     
    } catch (error) {
        console.log(error)
    }

}