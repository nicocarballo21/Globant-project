import axios from 'axios';
/* import API_URL from 'react-native-dotenv' */

const userLogin = async user => {
  const req = await axios.post('http://10.0.2.2:3000' + '/api/users/login', user);
  return req.data;
};

export {
  userLogin,
}
