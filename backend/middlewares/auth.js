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

exports.userOnly = (req, res, next) => {
  const token = req.cookies?.user;
  if (!token) return res.status(401).json({ success: false });

  try {
    const decoded = jwt.verify(token, process.env.jwtsecret);
    req.user = decoded; 
    next();
  } catch {
    res.status(401).json({ success: false });
  }
}
