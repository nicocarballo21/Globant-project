const express = require("express");
const router = express.Router();
const users = require("./users");
const skills = require("./skills");

router.use("/users", users);
router.use("/skills", skills);

module.exports = router;
