const Admin = require("../models/Admin")
const User = require("../models/User")


exports.adminLogin = async (req, res) => {
    try {
        const { name, password } = req.body
        if (!(name && password)) {
            return res.json({msg:"Username and password required"})
        }

        const admin = await Admin.findOne({ name: name }).select('+password')
        if (!admin) {
            return res.json({msg:"admin not found"})
        }

        const verified = await admin.validatePassword(password)

        if (!verified) {
            return res.json({msg:"Incorrect Username or password"})
        }

        const admintoken = admin.getjwt()

        return res
            .cookie("admin", admintoken, { httpOnly: true ,path:'/admin'})
            .json({ success: true, role: "admin" });
            
    } catch (error) {
        console.log(error)
    }

}

exports.adminLogout = (req, res) => {
    res.clearCookie('admin', { httpOnly: true ,path:'/admin'})
    return res.json({ success: true, msg: "admin logged out!!" });
}


//userLoginSignup


// exports.userRegister = async (req, res) => {
//     const { name, email, password, phoneNumber, dateOfBirth, gender, address, drivingLiscenceNumber, drivingLiscenceValidity, AadharNumber, AadharImage, role } = req.body

//     await User.create({
//         id: Date.now(),
//         name: name,
//         email: email,
//         password: password,
//         phoneNumber: phoneNumber,
//         dateOfBirth: dateOfBirth,
//         gender: gender,
//         address: address,
//         drivingLiscenceNumber: drivingLiscenceNumber,
//         drivingLiscenceValidity: drivingLiscenceValidity,
//         AadharNumber: AadharNumber,
//         AadharImage: AadharImage,
//         role: role
//     })
// }

// exports.userLoginPage = (req, res) => {
//     return res.json(msg)
// }

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!(email && password)) {
            return res.json({msg:"Email and password required"})
        }

        const user = await User.findOne({ email: email }).select('+password')
        if (!user) {
            return res.json({msg:"user not found"})
        }

        const verified = await user.validatePassword(password)

        if (!verified) {
            return res.json({msg:"Incorrect Email or password"})
        }

        const usertoken = user.getjwt()

        return res
                .cookie("user", usertoken, { httpOnly: true ,path:'/user'})
                .json({ success: true, role: "user" });
        
    } catch (error) {
        console.log(error)
    }
}

exports.userLogout = (req, res) => {
    res.clearCookie('user', { httpOnly: true ,path:'/user'})
    return res.json({ success: true, msg: "user logged out!!" });
}