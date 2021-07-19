const express = require("express")
const router = express.Router()

const {
  userRegister,
  userLogin,
  userUpdate,
  mentorAndMenteeToggling
} = require("../controllers/userController")
const { auth } = require("../middlewares/jwt")

// RUTAS /api/users

router.post("/register", userRegister)

router.post("/login", userLogin)

router.put("/profile", auth, userUpdate)

router.put("/mentor", auth, mentorAndMenteeToggling)

router.put("/mentee", auth, mentorAndMenteeToggling)

router.put("/skills", auth, userUpdate)

module.exports = router
