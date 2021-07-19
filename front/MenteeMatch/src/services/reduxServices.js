import axios from 'axios';
import { API_URL } from '@env';

const userLogin = async user => {
  const req = await axios.post(API_URL + '/api/auth/login', user);
  return req.data;
};

const sendUserRegister = (data) => {
  return axios.post(`${API_URL}/api/auth/register`, {
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: data.password,
  })
}

const sendUserData = (data) => {
  return axios.post(`${API_URL}/api/auth/register`, {
    position: data.position,
    phone: data.phone,
    personalDescription: about,
    country: data.country
  })
}

export { userLogin, sendUserRegister, sendUserData };

