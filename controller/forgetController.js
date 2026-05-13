const authModel = require("../model/authModel");
const forgetModel = require("../model/forgetModel");
const bcrypt = require("bcrypt");

const forgetController = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate the input fields
    if (!email) {
      return res.status(417).json({
        success: false,
        error: "Email is required",
        error_description: "Email field must not be empty",
      });
    }
    if (!password) {
      return res.status(417).json({
        success: false,
        error: "Password is required",
        error_description: "Password field must not be empty",
      });
    }

    // Check if the user exists
    const user = await authModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User Not Found",
        error_description: "No user found with the provided email",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { forgetController };
