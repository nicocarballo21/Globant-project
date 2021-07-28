const express = require("express")
const { Users } = require("../db/models")
const router = express.Router()

// Estoy en /api/users/objectives

router.get('/', async (req, res, next) => {
  try {
    const { id } = req.user
    const user = await Users.findById(id).exec()
    res.status(200).send()
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { targetUserId } = req.body
    const { objectives } = req.body
  } catch (error) {
    next(error)
  }
})

module.exports = router