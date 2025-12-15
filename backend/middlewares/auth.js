const jwt = require('jsonwebtoken')

exports.adminOnly = (req,res,next)=>{
    const admin = req.cookies?.admin
    if(!admin){
        return res.json({authentication:false})
    }
    try {
        const verified = jwt.verify(admin,process.env.jwtsecret)
        req.admin = verified
        return next()
    } catch (error) {
        console.log(error)
    }
    return res.json({authentication:true})
}

exports.userOnly = (req,res,next)=>{
    const user = req.cookies?.user
    if(!user){
        return res.redirect('/user/login')
    }
    try {
        const verified = jwt.verify(user,jwtsecret)
        req.user = verified
        return next()
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/user/login')
}