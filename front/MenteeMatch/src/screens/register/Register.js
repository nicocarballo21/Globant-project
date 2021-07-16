import React, { useState } from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Register from '../../components/register/Register';
import { setUser, userRegister } from '../../redux/Reducers/UserReducer';

export default () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const dataRegister = { name, lastName, email, password, passwordConf };

  const history = useHistory();
  const dispatch = useDispatch();

  handleChangeName = name => {
    const value = name;
    setUser(value);
  };
  handleChangeLastName = lastName => {
    const value = lastName;
    setLastName(value);
  };
  handleChangeEmail = email => {
    const value = email;
    setEmail(value);
  };
  handleChangePassword = password => {
    const value = password;
    setPassword(value);
  };
  handleChangePasswordConf = passwordConf => {
    const value = passwordConf;
    setPasswordConf(value);
  };

  handleSubmit = data => {
    /*axios.post('ruta', {name,lastName,email,phone,residence,workPosition,country})
        .then((response)=> console.log(response))
        .catch((error)=> console.log(error))*/
    dispatch(userRegister(data));
    console.log(data);
    history.push('/registerAcedemic');
  };

  return (
    <View>
      <Register
        history={history}
        handleChangeName={handleChangeName}
        handleChangeLastName={handleChangeLastName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleChangePasswordConf={handleChangePasswordConf}
        handleSubmit={handleSubmit}
        dataRegister={dataRegister}
      />
    </View>
  );
};
