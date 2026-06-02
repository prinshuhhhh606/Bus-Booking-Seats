const {
  Login,
  Signup,
  forgetPasswordController,
} = require("../controllers/authcontrollers");
const express = require("express");

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post("/forget-password", forgetPasswordController);

module.exports = router;