const { Users } = require("../db/models");

const createUser = (body) => {
  const { name, surname, email, password } = body;

  return Users.create({ name, surname, email, password });
};

const findUserByEmail = (email) => {
  return Users.findOne({ email })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .exec();
};

const findUserById = (_id) => {
  return Users.findOne({ _id })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .exec();
};

const updateById = (_id, body) => {
  return Users.findOneAndUpdate({ _id }, body, { new: true })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .exec();
};

const toggleMentorOrMentee = async (_id, type) => {
  const user = await findUserById(_id);
  user[type] = !user[type];
  return user.save();
};

const getMatchesForUser = async (
  _id,
  { roleToFind, skillsToFind, userSkills }
) => {
  const user = await findUserById(_id);

  if (roleToFind === "isMentor" && user.mentor?._id) return [];

  const matches =
    (await Users.find({
      [roleToFind]: true,
      [skillsToFind]: { $in: user[userSkills] },
    })) || [];

  if (roleToFind === "isMentor")
    return matches.filter((user) => {
      return user.disponible;
    });

  return matches;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateById,
  toggleMentorOrMentee,
  getMatchesForUser,
};
