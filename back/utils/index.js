const countCoincidences = (arr1, arr2) =>
  arr1.reduce((a, c) => a + arr2.includes(c), 0);

const orderByCoincidences = (user, matches, { skillsToFind, userSkills }) =>
  matches
    .map((match) => ({
      ...match._doc,
      coincidences: countCoincidences(
        user[userSkills].map((x) => x._id),
        match[skillsToFind]
      ),
    }))
    .sort((a, b) => a.coincidences - b.coincidences).reverse()

module.exports = {
  orderByCoincidences,
};
