const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userController = require("../controllers/userController")

router.post("/register", userController.userRegister)

router.post("/login", userController.userLogin)

module.exports = router
