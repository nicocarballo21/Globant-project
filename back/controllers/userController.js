const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByEmail,
  updateById,
  toggleMentorOrMentee,
} = require("../services/usersServices");

module.exports = {
  userRegister: (req, res) => {
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
  userLogin: (req, res) => {
    findUserByEmail(req.body.email).then((user) => {
      if (!user) return res.status(401).send("Invalid Credentials");
      user.comparePassword(req.body.password).then((password) => {
        if (!password) return res.status(401).send("Invalid Credentials");
        const token = jwt.sign({ id: user.id }, "mentee");
        return res.status(200).json({ token, user });
      });
    });
  },
  userUpdate: (req, res) => {
    updateById(req.user.id, req.body)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Update failed, try again");
      });
  },
  mentorAndMenteeToggling: (req, res) => {
    const type =
      (req.path.includes("mentor") && "isMentor") ||
      (req.path.includes("mentee") && "isMentee") ||
      null;

    if (!type) return res.status(400).json("incorrect path");

    toggleMentorOrMentee(req.user.id, type)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("Somenthing failed, try again");
      });
  },
};
