const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const Review = require('../models/review')

exports.userAuth = (req, res) => {
    res.json({ ok: true ,role:"user"})
}

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ success: false });
    }

    return res.json({
      success: true,
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};


exports.submitreview = async(req,res)=>{
  try {
    const {ratings,review} = req.body
    const username = await User.find({email:req.user.email})
    await Review.create({
      id:Date.now(),
      name:username.name,
      email:username.email,
      review:review,
      ratings:ratings,
      date:Date.now()
    })
    console.log('review created!!')
    return res.json({success:true})
  } catch (error) {
    console.log(error)
  }
  
}