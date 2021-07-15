import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';

import {Link} from 'react-router-native';
import {loginMessage} from '../../utils';

//redux
import {useDispatch} from 'react-redux';
import {userLogin} from '../../redux/Reducers/UserReducer';

import styles from './styles';
import logo from '../../utils/logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const user = {email, password};

  const handleSubmit = userData => {
    dispatch(userLogin(userData)).then(({payload}) => {
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

        <Link component={TouchableOpacity} to="/registerPerson">
          <Text style={styles.footer}>Your are not login? Register here!</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
