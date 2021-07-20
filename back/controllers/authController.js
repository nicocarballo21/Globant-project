const jwt = require("jsonwebtoken")

const { createUser, findUserByEmail } = require("../services/usersServices")

module.exports = {
  register: async (req, res, next) => {
    try {
      const user = await createUser(req.body)

      const token = jwt.sign({ id: user.id }, "mentee")

      res.status(200).json({ user: { ...user._doc, password: null }, token })
    } catch (err) {
      next(err)
    }
  },

  login: async (req, res, next) => {
    try {
      const user = await findUserByEmail(req.body.email)

      if (!user) return res.status(401).send("Invalid Credentials")

      const compareResult = await user.comparePassword(req.body.password)

      if (!compareResult) return res.status(401).send("Invalid Credentials")

      const token = jwt.sign({ id: user.id }, "mentee")

      res.status(200).json({ user: { ...user._doc, password: null }, token })
    } catch (err) {
      next(err)
    }
  }
}
