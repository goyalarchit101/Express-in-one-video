const express = require("express");
const registerUser = require("./userController");
const router = express.Router();

router.route("/login").post(registerUser);
router.route("/register").get(registerUser);
router.route("/register/delete").delete(registerUser);

module.exports = router;