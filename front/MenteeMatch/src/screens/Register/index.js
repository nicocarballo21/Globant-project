import React from 'react';
import { View } from 'react-native';
import { userRegister } from '../../redux/Reducers/UserReducer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Register from '../../components/Register';
import { simpleMessage } from '../../utils';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = async data => {
    if (data.password === data.passwordConf && data) {
      dispatch(userRegister(data)).then(({ payload }) => {
        if (payload) {
          simpleMessage('Exito', 'Paso 1 de 2 completado!', 'success');
          navigation.navigate('UserData');
        } else simpleMessage('Error', 'Algo salio mal!', 'danger');
      });

      return;
    }
    simpleMessage('Error', 'Las passwords deben ser iguales', 'danger');
  };
  return (
    <View>
      <Register onSubmit={onSubmit} />
    </View>
  );
};
