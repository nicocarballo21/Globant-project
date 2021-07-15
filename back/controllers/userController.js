const jwt = require("jsonwebtoken");

const { createUser, findUserByEmail } = require("../services/usersServices");

module.exports = {
  userRegister: function (req, res) {
    createUser(req.body)
      .then((user) => {
        const token = jwt.sign({ id: user.id }, "mentee");
        res.status(200).json({ user, token });
      })
      .catch(() => res.send("User exists"));
  },
  userLogin: function (req, res) {
    findUserByEmail(req.body.email).then((user) => {
      if (!user) return res.status(400).send("Invalid Credentials");
      user.comparePassword(req.body.password).then((password) => {
        if (!password) return res.status(401).send("Invalid Credentials");
        const token = jwt.sign({ id: user.id }, "mentee");
        return res.status(200).json({ token, user });
      });
    });
  },
};
