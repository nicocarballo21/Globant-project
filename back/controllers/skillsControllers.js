const { getSkills } = require("../services/skillsServices");

module.exports = {
  getAllSkills: async (_, res, next) => {
    try {
      const skills = await getSkills();
      res.status(200).json(skills);
    } catch (err) {
      next(err);
    }
  },
};
