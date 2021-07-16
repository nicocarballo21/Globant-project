import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { loginMessage } from '../../utils';
import axios from 'axios';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../../redux/Reducers/UserReducer';

import styles from './styles';
import logo from '../../utils/logo.png';
import InputText from '../../components/InputText';

import Button from '../../components/Button';
import { getData, storeData } from '../../utils/storage';
import { API_URL } from '@env'

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const user = { email, password };
  const history = useHistory();

  const storeUser = useSelector(state => state.user);

  useEffect(async () => {
    try {
      const res = await axios.get(API_URL + '/api/skills');
      const skillsArray = await res.data;
      const skills = skillsArray.map(skill => skill.name);
      const storedUser = await getData('user');
      if (storedUser) {
        dispatch(setUser({ ...storedUser, skills }));
        return history.push('/userDetails');
      }
      dispatch(setUser({ ...storeUser, skills }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async userData => {
    const { payload } = await dispatch(getUser(userData));
    if (payload) {
      loginMessage(true);
      await storeData('user', payload);
      history.push('/userDetails');
    } else loginMessage(false);
  };

  return (
    <View style={styles.login}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.inputs}>
        <InputText
          onChangeText={setemail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <InputText
          onChangeText={setpassword}
          value={password}
          placeholder={'Password'}
          textContentType="password"
          secureTextEntry={true}
        />
        <Button title={'Log in'} pressFunction={() => handleSubmit(user)} />

        <Link component={TouchableOpacity} to="/registerPerson">
          <Text style={styles.footer}>Your are not login? Register here!</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
