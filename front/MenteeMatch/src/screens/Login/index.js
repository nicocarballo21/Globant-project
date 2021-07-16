import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';

import {Link, useHistory} from 'react-router-native';
import {loginMessage} from '../../utils';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getUser, setUser} from '../../redux/Reducers/UserReducer';

import styles from './styles';
import logo from '../../utils/logo.png';
import axios from 'axios';
import { getData, storeData } from '../../utils/storage';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const user = {email, password};
  const history = useHistory();

  const storeUser = useSelector(state => state.user)

  useEffect(async () => {
    try {
      const res = await axios.get('http://10.0.2.2:3000/api/skills');
      const skillsArray = await res.data;
      const skills = skillsArray.map(skill => skill.name);
      const storedUser = await getData('user')
      if(storedUser) {
        dispatch(setUser({...storedUser, skills}))
        return history.push('/userDetails')
      }
      dispatch(setUser({...storeUser, skills}));
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleSubmit = async userData => {
    const {payload} = await dispatch(getUser(userData));
    if (payload) {
      console.log(payload)
      loginMessage(true);
      await storeData('user', payload)
      history.push('/userDetails');
    } else loginMessage(false);
  };

  return (
    <View style={styles.login}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.inputs}>
        <TextInput
          onChangeText={setemail}
          style={styles.input}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={setpassword}
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          title="Log in"
          onPress={() => handleSubmit(user)}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <Link component={TouchableOpacity} to="/register">
          <Text style={styles.footer}>Your are not login? Register here!</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
