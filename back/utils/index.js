const countCoincidences = (arr1, arr2) =>
  arr1.reduce((a, c) => a + arr2.includes(c), 0);

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
  const ids = userDis_Likes.map((x) => x.id);
  return matches.filter(
    (match) => !ids.includes(match.id) && match.disponible
  );
};

module.exports = {
  orderByCoincidences,
  menteeResultFilter,
};
