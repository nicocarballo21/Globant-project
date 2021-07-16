import axios from 'axios';
import { API_URL } from '@env';

const userLogin = async user => {
  const req = await axios.post(API_URL + '/api/auth/login', user);
  return req.data;
};

export { userLogin };

