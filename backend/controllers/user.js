const User = require("../models/User");
const cloudinary = require("cloudinary").v2;

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
