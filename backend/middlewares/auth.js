const jwt = require('jsonwebtoken')

exports.adminOnly = (req,res,next)=>{
    const admin = req.cookies?.admin
    if(!admin){
        return res.status(401).json({ authentication: false });
    }

    try {
        const verified = jwt.verify(admin,process.env.jwtsecret)
        req.admin = verified
        return next()
    } catch (error) {
        return res.status(401).json({ authentication: false });
    }
}


exports.userOnly = (req,res,next)=>{
    const user = req.cookies?.user
    if(!user){
        return res.status(401).json({ authentication: false });
    }
    
    try {
        const verified = jwt.verify(user,process.env.jwtsecret)
        req.user = verified
        return next()
    } catch (error) {
        return res.status(401).json({ authentication: false });
    }
}