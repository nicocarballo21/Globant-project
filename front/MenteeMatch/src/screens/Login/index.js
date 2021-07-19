import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { loginMessage } from '../../utils';
import axios from 'axios';
import { API_URL } from '@env';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../../redux/Reducers/UserReducer';

import styles from './styles';
import logo from '../../utils/logo.png';

import { InputText, Button } from '../../components';

import { getData, storeData } from '../../utils/storage';
import { useForm, Controller } from 'react-hook-form';

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async userData => {
    const { payload } = await dispatch(getUser(userData));
    if (payload) {
      loginMessage(true);
      await storeData('user', payload);
      navigation.navigate('UserDetails');
    } else loginMessage(false);
  };

  const storeUser = useSelector(state => state.user);

  useEffect(async () => {
    try {
      const res = await axios.get(API_URL + '/api/skills');
      const skillsArray = await res.data;
      const skills = skillsArray.map(skill => skill.name);
      const storedUser = await getData('user');
      if (storedUser) {
        dispatch(setUser({ ...storedUser, skills }));
        return navigation.navigate('UserDetails');
      }
      e;
      dispatch(setUser({ ...storeUser, skills }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.login}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.inputs}>
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Ingrese su email' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              autoCompleteType="email"
              errors={errors.email}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              keyboardType="email-address"
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Ingrese su password',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.password}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
            />
          )}
        />

        <Button title={'Log in'} pressFunction={handleSubmit(onSubmit)} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footer}>Registrate aca!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
