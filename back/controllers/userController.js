const {
  updateById,
  toggleMentorOrMentee,
  getMatchesForUser,
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
      (req.path.includes("mentee") && "isMentee");

    toggleMentorOrMentee(req.user.id, type)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("Somenthing failed, try again");
      });
  },

  setSkills: (req, res) => {
    const type =
      (req.path.includes("learn") && "skillsToLearn") ||
      (req.path.includes("teach") && "skillsToTeach");

    const skills = req.body[type];

    if (!skills.length)
      return res.status(400).json("You need to add at least one skill");

    updateById(req.user.id, { [type]: skills })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Update failed, try again");
      });
  },

  getMatch: (req, res) => {
    const roleToFind =
      (req.path.includes("mentors") && "isMentor") ||
      (req.path.includes("mentees") && "isMentee");

    const skillsToFind =
      roleToFind === "isMentor" ? "skillsToTeach" : "skillsToLearn";

    const userSkills =
      roleToFind !== "isMentor" ? "skillsToTeach" : "skillsToLearn";

    getMatchesForUser(req.user.id, {
      roleToFind,
      skillsToFind,
      userSkills,
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Update failed, try again");
      });
  },
};
