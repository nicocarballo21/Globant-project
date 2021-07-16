const jwt = require("jsonwebtoken");

const { createUser, findUserByEmail } = require("../services/usersServices");

module.exports = {
  register: (req, res) => {
    createUser(req.body)
      .then((user) => {
        const token = jwt.sign({ id: user.id }, "mentee");
        res.status(200).json({ user, token });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Register failed, try again");
      });
  },

  login: (req, res) => {
    findUserByEmail(req.body.email).then((user) => {
      if (!user) return res.status(401).send("Invalid Credentials");

      user.comparePassword(req.body.password).then((password) => {
        if (!password) return res.status(401).send("Invalid Credentials");
        const token = jwt.sign({ id: user.id }, "mentee");
        return res.status(200).json({ token, user });
      });
    });
  },
};
