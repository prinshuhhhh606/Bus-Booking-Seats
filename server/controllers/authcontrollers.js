const User = require("../models/user");
const jwt = require("jsonwebtoken");

// ================= SIGNUP =================

const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // CHECK USER ALREADY EXISTS
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    // CREATE USER
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    // GENERATE TOKEN
    const token = jwt.sign({ id: user._id }, "prince606", { expiresIn: "1h" });

    res.status(201).json({
      message: "Signup successful",
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

// ================= LOGIN =================

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // FIND USER
    const user = await User.findOne({ email });

    // USER NOT FOUND
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }


    if (user.password !== password) {
      console.log("Entered:", password);
      console.log("Stored:", user.password);

      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign({ id: user._id }, "prince606", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

// ================= FORGOT PASSWORD =================

const forgetPasswordController = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.status(200).json({
      message: "Reset link sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

// ================= EXPORTS =================

module.exports = {
  Signup,
  Login,
  forgetPasswordController,
};
