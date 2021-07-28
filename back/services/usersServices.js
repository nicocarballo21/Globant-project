const { Users } = require("../db/models");
const { orderByCoincidences, menteeResultFilter } = require("../utils");

const createUser = body => {
  const { name, surname, email, password } = body
  if(!name || !surname || !email || !password) return {}
  return Users.create({ name, surname, email, password })
}

const findUserByEmail = email => {
  if(!email) return {}
  return Users.findOne({ email }, "-__v")
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .populate("mentor")
    .populate({
      path: "likes",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "mentor",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate("disLikes")
    .exec()
}

const findUserById = _id => {
  if(!_id) return {}
  return Users.findOne({ _id })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .populate({
      path: "likes",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "mentor",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .exec()
}

const updateById = (_id, body) => {
  if(!_id || !body) return {}
  return Users.findOneAndUpdate({ _id }, body, { new: true })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .populate({
      path: "likes",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "mentor",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .exec()
}

const toggleMentorOrMentee = async (_id, type) => {
  const user = await findUserById(_id)
  user[type] = !user[type]
  return user.save()
}

const getMatchesForUser = async (_id, { roleToFind, skillsToFind, userSkills }) => {
  const user = await findUserById(_id)

  if (roleToFind === "isMentor" && user.mentor?._id) return []

  const skillstTomatch = user[userSkills].map(x => x._id)

  let matches =
    (await Users.find({
      [roleToFind]: true,
      [skillsToFind]: { $in: skillstTomatch },
    })
      .populate(skillsToFind, "name")
      .exec()) || [];

  if (roleToFind === "isMentor") {
    matches = menteeResultFilter(
      [...user.likes, ...user.disLikes],
      matches
    );
  }
  return orderByCoincidences(skillstTomatch, matches, skillsToFind);
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateById,
  toggleMentorOrMentee,
  getMatchesForUser
}
