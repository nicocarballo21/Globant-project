const express = require("express");
const router = express.Router();
const { Meets, Users } = require('../db/models')
const { checkIfMentor } = require("../middlewares/checkIfMentor")

router.get('/', async (req, res, next) => {
    try {
        const { id } = req.user
        const user = await Users.findById(id).exec()
        if(!user) res.status(400).send('Bad request: no user found')
        const meets = await Meets.find({ participants: user })
        if(!meets) res.status(404).status('Not Found: no meets found')
        res.status(200).json(meets)
    } catch(err) { next(err) }
})

router.post('/', async (req, res, next) => {
    try {
        const { title, description, participants, link, date } = req.body
        if(!date || !title || (!participants.length)) res.status(400).send('Bad request: invalid inputs')
        const meet = await Meets.create({ title, description, participants, link, date })
        res.status(200).send(meet)
    } catch(err) { next(err) }
})

router.put('/', async (req, res, next) => {
    try {
        //Le paso el _id de la reunion
        const { _id } = req.body
        if(!_id) res.status(400).send('Bad request: no meet passed by')
        const meet = await Meets.findOneAndUpdate(_id, req.body, { new: true }).exec()
        if(!meet) res.status(304).send('Not Modified: check inputs')
        res.status(201).send(meet)
    } catch(err) { next(err) }
})

router.delete('/', async (req, res, next) => {
    try {
        const { _id } = req.body
        if(!_id) res.status(400).send('Bad request: no meet passed by')
        await Meets.findOneAndDelete(_id).exec()
        res.status(201).send('Meet deleted')
    } catch(err) { next(err) }
})

module.exports = router;
