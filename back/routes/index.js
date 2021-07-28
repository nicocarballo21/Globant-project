const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/jwt")
const { isMentor } = require("../middlewares/isMentor")

const usersRoutes = require("./users")
const skillsRoutes = require("./skills")
const authRoutes = require("./auth")
const objectivesRoutes = require("./objectives")

router.use("/auth", authRoutes)
router.use("/users", auth, usersRoutes)
router.use("/skills", skillsRoutes)

module.exports = router
