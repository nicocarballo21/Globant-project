const { Users, Objectives } = require("../db/models");
const Notes = require("../db/models/Notes");
const {
  orderByCoincidences,
  menteeResultFilter,
  mentorResultFilter,
} = require("../utils");

const createUser = (body) => {
  const { name, surname, email, password } = body;
  if (!name || !surname || !email || !password) return {};
  return Users.create({ name, surname, email, password });
};

const findUserByEmail = (email) => {
  if (!email) return {};
  return Users.findOne({ email }, "-__v")
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .populate("mentor")
    .populate({
      path: "likedMentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate({
      path: "dislikedMentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate({
      path: "likedMentors",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "dislikedMentors",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "mentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate("objectives")
    .exec();
};

const findUserById = (_id) => {
  if (!_id) return {};
  return Users.findOne({ _id })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .populate({
      path: "likedMentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate({
      path: "dislikedMentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate({
      path: "likedMentors",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "dislikedMentors",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "mentees",
      populate: {
        path: "skillsToLearn",
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
    .populate("objectives")
    .exec();
};

const updateById = (_id, body) => {
  if (!_id || !body) return {};
  return Users.findOneAndUpdate({ _id }, body, { new: true })
    .populate("skillsToLearn", "name")
    .populate("skillsToTeach", "name")
    .populate({
      path: "likedMentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate({
      path: "dislikedMentees",
      populate: {
        path: "skillsToLearn",
        model: "Skills",
      },
    })
    .populate({
      path: "likedMentors",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "dislikedMentors",
      populate: {
        path: "skillsToTeach",
        model: "Skills",
      },
    })
    .populate({
      path: "mentees",
      populate: {
        path: "skillsToLearn",
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
    .populate("objectives")
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

  const skillstTomatch = user[userSkills].map((x) => x._id);

  let matches =
    (await Users.find({
      [roleToFind]: true,
      [skillsToFind]: { $in: skillstTomatch },
    })
      .populate(skillsToFind, "name")
      .exec()) || [];

  // Para que no se incluya a él mismo
  matches = matches.filter((match) => match.id !== _id);

  // Si busco mentees, que esos mentees no tengan ya un mentor asignado
  if (roleToFind === "isMentee")
    matches = matches.filter((match) => !match.mentor);

  // Se agrega user.mentees cómo filtro también porque no tiene sentido que un mentee que busca mentor, le salgan sus propios mentees como opción a elegir. Lo mismo en el rol contrario.
  if (roleToFind === "isMentor") {
    matches = mentorResultFilter(
      [...user.likedMentors, ...user.dislikedMentors, ...user.mentees],
      matches
    );
  }

  // Se agrega user.mentor como filtro también porque no me tiene que salir mi propio mentor como mentee elegible (en el caso que esa persona tenga los dos roles habilitados)
  if (roleToFind === "isMentee") {
    matches = menteeResultFilter(
      [
        ...user.likedMentees,
        ...user.dislikedMentees,
        ...user.mentees,
        user.mentor ? user.mentor : { id: null },
      ],
      matches
    );
  }

  return orderByCoincidences(skillstTomatch, matches, skillsToFind);
};

const getObjectivesFromUser = (id) => {
  const objectivesPromise = Objectives.find({ mentee: id }).exec();
  return objectivesPromise;
};

const postObjectivesToUser = (mentee, description, state, due) => {
  const createdObjectivePromise = Objectives.create({
    mentee: mentee.id,
    description,
    state,
    due,
  });
  return createdObjectivePromise;
};

const putObjectivesFromUser = (objectiveId, data) => {
  const updatedObjectivePromise = Objectives.findByIdAndUpdate(
    objectiveId,
    data,
    {
      new: true,
    }
  ).exec();
  return updatedObjectivePromise;
};

const deleteObjectivesFromUser = (objectiveId, user) => {
  const { objectives } = user;
  const objective = objectives.find(
    (objective) => objective.id === objectiveId
  );
  if (!objective) return null;
  else {
    user.objectives = user.objectives.filter(
      (objective) => objective.id !== objectiveId
    );
    return [user.save(), objective.delete()];
  }
};

const setMenteeToMentor = async (menteeId, mentorId) => {
  try {
    const mentor = await Users.findById(mentorId).exec();
    if (!mentor || !mentor.disponible) return null;
    mentor.mentees.push(menteeId);
    return mentor.save();
  } catch (error) {
    console.log(error);
  }
};

const setMentorToMentee = async (mentorId, menteeId) => {
  try {
    const mentee = await Users.findById(menteeId).exec();
    const mentor = await Users.findById(mentorId)
      .populate("likedMentees")
      .exec();
    if (mentee.mentor || !mentor.disponible) return [null, null];
    mentee.mentor = mentorId;
    mentor.likedMentees = mentor.likedMentees.filter(
      (mentee) => mentee.id !== menteeId
    );
    return [mentee.save(), mentor.save()];
  } catch (error) {
    console.log(error);
  }
};

const getNotesFromUser = (mentorId, menteeId) => {
  const notesPromise = Notes.find({ from: mentorId, to: menteeId }).exec()
  return notesPromise
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateById,
  toggleMentorOrMentee,
  getMatchesForUser,
  getObjectivesFromUser,
  postObjectivesToUser,
  putObjectivesFromUser,
  deleteObjectivesFromUser,
  setMenteeToMentor,
  setMentorToMentee,
  getNotesFromUser
};
