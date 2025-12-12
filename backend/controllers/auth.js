const Admin = require("../models/Admin")

exports.adminLoginPage = (req,res)=>{
    let msg = ""
    return res.json(msg)
} 

exports.adminLogin = async (req,res)=>{
    const {name,password} = req.body

    if (!(name && password)){
        let msg = "Username and password required"
        return res.json(msg)
    }

    const admin = await Admin.findOne({name:username}).select('+password')
    if(!admin){
        let msg = "Incorrect Username or password"
        return res.json(msg)
    }
    
    const verified = await admin.validatePassword(password)

    if(!verified){
        let msg = "Incorrect Username or password"
        return res.json(msg)
    }

    const admintoken = admin.getjwt()
   
    return res.cookie('admin',admintoken,{httpOnly:true})
} 

exports.adminLogout = (req,res)=>{
    return res.clearCookie('admin')
}