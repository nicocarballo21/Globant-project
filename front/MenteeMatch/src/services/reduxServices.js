import axios from 'axios';

const userLogin = async () => {
  const req = await axios.post('ruta', user);
  return req.data;
};

module.exports = {
  userLogin,
};
