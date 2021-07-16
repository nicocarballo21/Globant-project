import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { Link } from 'react-router-native';
import { loginMessage } from '../../utils';

//redux
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/Reducers/UserReducer';

import styles from './styles';
import logo from '../../utils/logo.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const user = { email, password };

  const handleSubmit = userData => {
    console.log(userData);
    dispatch(userLogin(userData)).then(({ payload }) => {
      if (payload) loginMessage(true);
      else loginMessage(false);
    });
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
