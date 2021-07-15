const { Users } = require("../db/models");

module.exports = {
  createUser: (body) => {
    const { name, surname, email, password } = body;

    return Users.create({ name, surname, email, password });
  },
  findUserByEmail: (email) => {
    return Users.findOne({ email }).populate({
      path: "skills",
      populate: { path: "name" },
    });
  },
};
