const { default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String,
        select: false
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    drivingLiscenceNumber: {
        type: String
    },
    drivingLiscenceValidity: {
        type: Date
    },
    AadharNumber: {
        type: String
    },
    AadharImage: {
        type: String
    },
    role: {
        type: String,
        default: 'User'
    }
})


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 5)
    return next()
})

userSchema.methods.validatePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password)
}

userSchema.methods.getjwt = function () {
    const token = jwt.sign({
        email: this.email,
        password: this.password
    }, process.env.jwtsecret, { expiresIn: '1h' })
    return token
}

module.exports = mongoose.model('User', userSchema)