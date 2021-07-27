const countCoincidences = (userSkills, skillsToFind) =>
  userSkills.reduce((a, c) => a + skillsToFind.includes(c), 0);

const orderByCoincidences = (userSkills, matches, skillsToFind) =>
  matches
    .map((match) => ({
      ...match._doc,
      password: null,
      coincidences: countCoincidences(
        userSkills,
        match[skillsToFind].map((x) => x._id)
      ),
    }))
    .sort((a, b) => b.coincidences - a.coincidences);

const menteeResultFilter = (userDis_Likes, matches) => {
  const ids = userDis_Likes.map((x) => (x._id || x).toString());
  return matches.filter(
    (match) => !ids.includes(match._id.toString()) && match.disponible
  );
};

module.exports = {
  orderByCoincidences,
  menteeResultFilter,
};
