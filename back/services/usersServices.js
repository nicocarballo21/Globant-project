const { Users } = require("../db/models");

module.exports = {
  createUser: (body) => {
    const { name, surname, email, password } = body;

    return Users.create({ name, surname, email, password });
  },
  findUserByEmail: (email) => {
    return Users.findOne({ email }).populate("skills", "name").exec();
  },
  updateById: (_id, body) => {
    return Users.findOneAndUpdate({ _id }, body, { new: true })
      .populate("skills", "name")
      .exec();
  },
  toggleMentorOrMentee: async (_id, type) => {
    const user = await Users.findOne({ _id }).exec();
    user[type] = !user[type];
    return user.save();
  },
};
