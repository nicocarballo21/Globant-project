import axios from 'axios';
/* import API_URL from 'react-native-dotenv' */

const userLogin = async user => {
  console.log("hola", user)
  const req = await axios.post('http://10.0.2.2:3000' + '/api/users/login', user);
  return req.data;
};

const getSkills = async () => {
  const req = await axios.get('http://10.0.2.2:3000' + '/api/skills');
  const skillsArray = req.data
  const skills = skillsArray.map(skill => skill.name)
  return skills;
};

export {
  userLogin,
  getSkills
}
