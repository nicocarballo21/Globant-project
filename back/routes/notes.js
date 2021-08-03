const express = require("express")
const { checkIfMentor } = require("../middlewares/checkIfMentor")

const {getUserNotes} = require("../controllers/userController")
const router = express.Router()

// Estoy en /api/users/notes

router.get("/", getUserNotes)
router.post("/", checkIfMentor, postUserObjectives)
router.put("/", checkIfMentor, putUserObjectives)
router.delete("/:menteeId/:objectiveId", checkIfMentor, deleteUserObjectives)

module.exports = router
