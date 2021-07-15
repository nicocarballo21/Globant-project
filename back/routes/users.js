const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.userRegister);

router.post("/login", userController.userLogin);

router.put("/profile/:_id", userController.userUpdate);

router.put("/mentor/:_id", userController.mentorAndMenteeToggling);

router.put("/mentee/:_id", userController.mentorAndMenteeToggling);

module.exports = router;
