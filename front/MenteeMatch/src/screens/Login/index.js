import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Text,
} from 'react-native';
import {Link} from 'react-router-native';

import styles from './styles';

import logo from '../../utils/logo.png';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  //////
  //handle submit login
  //////

  return (
    <View style={styles.login}>
      <View>
        <Image style={styles.tinyLogo} source={logo} />
      </View>

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
        onPress={() => Alert.alert('logueado')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Link to="/register">
        <Text style={styles.footer}>Your are not login? Register here!</Text>
      </Link>
    </View>
  );
};

export default Login;
