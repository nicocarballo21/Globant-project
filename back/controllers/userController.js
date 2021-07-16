const {
  updateById,
  toggleMentorOrMentee,
} = require("../services/usersServices");

module.exports = {
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
