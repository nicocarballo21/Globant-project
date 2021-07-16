const express = require("express");
const router = express.Router();

const {
  userUpdate,
  mentorAndMenteeToggling,
} = require("../controllers/userController");

// RUTAS /api/users

router.put("/profile", userUpdate);

router.put("/mentor", mentorAndMenteeToggling);

router.put("/mentee", mentorAndMenteeToggling);

router.put("/skills", userUpdate);

module.exports = router;
