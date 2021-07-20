const countCoincidences = (arr1, arr2) => arr1.reduce((a, c) => a + arr2.includes(c), 0)

const orderByCoincidences = (userSkills, matches, skillsToFind) =>
  matches
    .map(match => ({
      ...match._doc,
      password: null,
      coincidences: countCoincidences(userSkills, match[skillsToFind])
    }))
    .sort((a, b) => a.coincidences - b.coincidences)
    .reverse()

module.exports = {
  orderByCoincidences
}
