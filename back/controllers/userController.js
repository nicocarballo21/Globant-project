const {
  updateById,
  toggleMentorOrMentee,
  getMatchesForUser,
} = require("../services/usersServices");

module.exports = {
  userUpdate: async (req, res, next) => {
    try {
      const user = await updateById(req.user.id, req.body);
      if(!user) res.status(400).send("Bad request: user not found")
      res.status(200).json({ ...user._doc, password: null });
    } catch (err) {
      next(err);
    }
  },
  mentorAndMenteeToggling: async (req, res, next) => {
    try {
      const type =
        (req.path.includes("mentor") && "isMentor") ||
        (req.path.includes("mentee") && "isMentee");

      const user = await toggleMentorOrMentee(req.user.id, type);
      res.status(200).json({ ...user._doc, password: null });
    } catch (err) {
      next(err);
    }
  },

  setSkills: async (req, res, next) => {
    try {
      const type =
        (req.path.includes("learn") && "skillsToLearn") ||
        (req.path.includes("teach") && "skillsToTeach");

      if (!req.body[type])
        return res
          .status(400)
          .json("The body of your request is not correct!, try again");

      const skills = req.body[type];

      if (!skills.length)
        return res.status(400).json("You need to add at least one skill");

      const user = await updateById(req.user.id, { [type]: skills });

      res.status(200).json({ ...user._doc, password: null });
    } catch (err) {
      next(err);
    }
  },

  getMatch: async (req, res, next) => {
    try {
      const roleToFind =
        (req.path.includes("mentors") && "isMentor") ||
        (req.path.includes("mentees") && "isMentee");

      const skillsToFind =
        roleToFind === "isMentor" ? "skillsToTeach" : "skillsToLearn";

      const userSkills =
        roleToFind !== "isMentor" ? "skillsToTeach" : "skillsToLearn";

      if(!roleToFind || !skillsToFind || !userSkills) 
      res.status(400).send("Bad request: invalid inputs")

      const matches = await getMatchesForUser(req.user.id, {
        roleToFind,
        skillsToFind,
        userSkills,
      });
      res.status(200).json(matches);
    } catch (err) {
      next(err);
    }
  },
  


};
