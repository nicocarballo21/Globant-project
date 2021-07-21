const countCoincidences = (userSkills, skillsToFind) =>
userSkills.reduce((a, c) => a + skillsToFind.includes(c), 0);

const orderByCoincidences = (userSkills, matches, skillsToFind) =>
  matches
    .map((match) => ({
      ...match._doc,
      coincidences: countCoincidences(userSkills, match[skillsToFind].map((x) => x._id)),
    }))
    .sort((a, b) => a.coincidences - b.coincidences)
    .reverse();

module.exports = {
  orderByCoincidences,
};
