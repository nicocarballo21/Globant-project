import axios from 'axios';
// import { API_URL } from '@env';

const userLogin = async user => {
  const req = await axios.post('http://localhost:3000/api/users/login', user);
  return req.data;
};

export { userLogin };
