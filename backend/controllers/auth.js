const Admin = require("../models/Admin")

exports.adminLoginPage = (req, res) => {
    let msg = ""
    return res.json(msg)
}

exports.adminLogin = async (req, res) => {
    const { name, password } = req.body
    console.log(req.body)
    if (!(name && password)) {
        let msg = "Username and password required"
        return res.json(msg)
    }

    const admin = await Admin.findOne({ name: name }).select('+password')
    if (!admin) {
        let msg = "Incorrect Username or password"
        return res.json(msg)
    }

    const verified = await admin.validatePassword(password)

    if (!verified) {
        let msg = "Incorrect Username or password"
        return res.json(msg)
    }

    const admintoken = admin.getjwt()

    return res
        .cookie("admin", admintoken, { httpOnly: true })
        .json({ success: true, role: "admin" });

}

exports.adminLogout = (req, res) => {
    return res.clearCookie('admin').redirect('/admin/login')
}

//userLoginSignup

const User = require("../models/User")
const msg = ''
exports.userRegisterPage = (req, res) => {
    return res.json(msg)
}

exports.userRegister = async (req, res) => {
    const { name, email, password, phoneNumber, dateOfBirth, gender, address, drivingLiscenceNumber, drivingLiscenceValidity, AadharNumber, AadharImage, role } = req.body

    await User.create({
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        gender: gender,
        address: address,
        drivingLiscenceNumber: drivingLiscenceNumber,
        drivingLiscenceValidity: drivingLiscenceValidity,
        AadharNumber: AadharNumber,
        AadharImage: AadharImage,
        role: role
    })
    return res.json(msg)
}

exports.userLoginPage = (req, res) => {
    return res.json(msg)
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body

    if (!(email && password)) {
        return res.json(msg = 'Email and password required')
    }

    const user = await User.findOne({ email: email }).select('+password')
    if (!user) {
        return res.json(msg = 'Incorrect Email or password')
    }

    const verified = await user.validatePassword(password)

    if (!verified) {
        return res.json(msg = 'Incorrect Email or password')
    }

    const usertoken = user.getjwt()

    return res.cookie('user', usertoken, { httpOnly: true ,secure:true,sameSite: "none"}).redirect('/user')
}

exports.userLogout = (req, res) => {
    return res.clearCookie('user').redirect('/user/login')
}