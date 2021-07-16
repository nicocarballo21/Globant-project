import axios from 'axios';

const userLogin = async user => {
  const req = await axios.post('http://localhost:3000/api/users/login', user);
  return req.data;
};



module.exports = {
  userLogin,
};
