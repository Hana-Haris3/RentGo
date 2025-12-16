const fileUploadToCloudinary=require('../config/fileUpload')
const Car = require('../models/Car')


exports.adminAuth = (req, res) => {
    res.json({ ok: true ,role:"admin"})
}

exports.addCar =async (req,res)=>{
    try {
        const{name,seats,doors,luggage,transmission,brand,color,modelName,modelYear,manufactureYear,registrationNumber,pricePerDay,engine,type,mileage,fuelType,equipments,available,maintenance,description,damageNotes}=req.body
    const carImages = []
    if (Array.isArray(req.files.images)) {
        for (const file of req.files.images) {
            const uploaded = await fileUploadToCloudinary(file);
            carImages.push(uploaded.public_id);
        }
        } else if (req.files.images) {
        const uploaded = await fileUploadToCloudinary(req.files.images);
        carImages.push(uploaded.public_id);
        }

        console.log(carImages);

        await Car.create({
            id:Date.now(),
            name,
            brand,
            modelName,
            type,
            modelYear,
            manufactureYear,
            registrationNumber,
            pricePerDay,
            engine,
            mileage,
            seats,
            doors,
            luggage,
            transmission,
            fuelType,
            available,
            maintenance,
            description,
            damageNotes,
            equipments,
            color,
            images:carImages
        })
        console.log("car created!!")

        return res.json({success:true})
    } catch (error) {
        console.log("car creation failed!!")
        console.log(error)
    }
   

}
