import axios from 'axios';
import { API_URL } from '@env'
import generateAxios from '../utils/generateAxios';

const userLogin = async user => {
  try {
    /* console.log(API_URL) */
    const res = await axios.post(`${API_URL}/api/auth/login`, user);
    const { token } = res.data;
    const finalUser = { ...res.data.user, token };
    return finalUser;
  } catch (error) {
    console.log(error);
  }
};

const updateUserData = async (data, token, url) => {
  try {
    const res = await axios.put(`${API_URL}${url}`, data, {
      headers: { authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const registerUser = async data => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    });
    const { token } = res.data;
    const finalUser = { ...res.data.user, token };
    return finalUser;
  } catch (err) {
    console.log(err);
  }
};

const obtainSkills = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/skills`);
    const skills = await res.data;
    return skills;
  } catch (error) {
    console.log(error);
  }
};

const getMeets = async (token) => {
  try {
    const axiosAuthorized = generateAxios(token)
    const res = await axiosAuthorized.get(`${API_URL}/api/users/meets`)
    return res.data
  } catch(err) { console.log(err) } 
}

const createMeet = async ({data, token}) => {
  try {
    const axiosAuthorized = generateAxios(token)
    const res = await axiosAuthorized.post(`${API_URL}/api/users/meets`, data)
    return res.data
  } catch(err) { console.log(err) } 
}

const updateMeet = async ({data, token}) => {
  try {
    const axiosAuthorized = generateAxios(token)
    const res = await axiosAuthorized.put(`${API_URL}/api/users/meets`, data)
    return res.data
  } catch(err) { console.log(err) }
}

const deleteMeet = async ({_id, token}) => {
  try {
    const axiosAuthorized = generateAxios(token)
    const res = axiosAuthorized.delete(`${API_URL}/api/users/meets/${_id}`)
    return res.data
  } catch(err) { console.log(err) }
}

export { 
  userLogin, 
  registerUser, 
  obtainSkills, 
  updateUserData, 
  getMeets, 
  createMeet,
  updateMeet,
  deleteMeet
 };
