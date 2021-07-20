import axios from 'axios';
import { API_URL } from '@env';

const userLogin = async user => {
  try {
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
    // url = /api/users/profile
    console.log(data);
    const res = await axios.put(`${API_URL}${url}`, data, {
      headers: { authorization: token },
    });
    // const { token } = res.data;
    // const finalUser = { ...res.data.user, token };
    return finalUser;
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

export { userLogin, registerUser, obtainSkills, updateUserData };
