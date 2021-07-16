const { getSkills } = require("../services/skillsServices")

module.exports = {
  getAllSkills: (req, res) => {
    getSkills()
      .then(skills => {
        res.status(200).json(skills)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json("Somenthing failed, try again")
      })
  }
}
