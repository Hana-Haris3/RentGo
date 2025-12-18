import User from "../models/User.js";
// import User from"../models/User"
import { v2 as cloudinary } from "cloudinary";


export const userAuth = (req, res) => { 
  res.json({ ok: true, role: "user" });
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ success: false });
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updateData = req.body;

    if (req.files) {
      if (req.files.profilePhoto) updateData.profilePhoto = req.files.profilePhoto.tempFilePath;
      if (req.files.drivingLiscenceImg) updateData.drivingLiscenceImg = req.files.drivingLiscenceImg.tempFilePath;
      if (req.files.AadharImage) updateData.AadharImage = req.files.AadharImage.tempFilePath;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    console.log(updatedUser)
    return res.status(200).json({ success: true, user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const submitreview = async(req,res)=>{
  try {
    const {rating,review} = req.body
    const username = await User.findOne({email:req.user.email})
    await Review.create({
      id:Date.now(),
      name:username.name,
      email:username.email,
      review:review,
      ratings:rating,
      date:Date.now()
    })
    console.log('review created!!')
    return res.json({success:true})
  } catch (error) {
    console.log(error)
  }
  
}

// export const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     await User.deleteOne({ _id: id });

//     return res.status(200).json({ success: true, message: "User deleted successfully", user });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     return res.status(500).json({ success: false, message: "Server error. Could not delete user." });
//   }
// };
