const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userControllers");

// Routes
router.post("/user/register", controllers.userregister);

router.post("/user/login", controllers.userLogin);

router.post("/user/sendotp", controllers.userOtpSend);

module.exports = router;
