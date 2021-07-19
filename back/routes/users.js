const express = require("express")
const router = express.Router()

const {
  userUpdate,
  mentorAndMenteeToggling,
  setSkills,
  getMatch
} = require("../controllers/userController")

// RUTAS /api/users

router.put("/profile", userUpdate)

router.put("/mentor", mentorAndMenteeToggling)

router.put("/mentee", mentorAndMenteeToggling)

router.put("/skills/learn", setSkills)

router.put("/skills/teach", setSkills)

router.get("/match/mentors", getMatch)

router.get("/match/mentees", getMatch)

module.exports = router
