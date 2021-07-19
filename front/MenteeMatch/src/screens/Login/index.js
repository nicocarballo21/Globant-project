import React, { useEffect, useState } from 'react';
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
import { API_URL } from '@env';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const [isSubmit, setisSubmit] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(errors);

  const onSubmit = async userData => {
    setisSubmit(true);
    const { payload } = await dispatch(getUser(userData));
    if (payload) {
      loginMessage(true);
      await storeData('user', payload);
      history.push('/userDetails');
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
        return history.push('/userDetails');
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
        {errors.email && <Text style={styles.error}>Campo reqeurido</Text>}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.email}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
        />
        {errors.password && <Text style={styles.error}>Campo reqeurido</Text>}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.password}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
            />
          )}
        />

        <Button title={'Log in'} pressFunction={handleSubmit(onSubmit)} />
        <Link component={TouchableOpacity} to="/registerPerson">
          <Text style={styles.footer}>Your are not login? Register here!</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
