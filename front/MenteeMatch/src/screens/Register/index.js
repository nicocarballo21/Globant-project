import React from 'react';
import { View } from 'react-native';
import { registerUser } from '../../services/reduxServices';
import { useNavigation } from '@react-navigation/native';

import Register from '../../components/Register';

import { simpleMessage } from '../../utils';

export default () => {
  const navigation = useNavigation();

  const onSubmit = async data => {
    if (data.password === data.passwordConf && data) {
      const success = await registerUser(data);
      if (success) {
        simpleMessage('Exito', 'Paso 1 de 2 completado!', 'success');
        navigation.navigate('UserData');
        // ver de como hacer para cachear el error y saber si el user ya existe
      } else simpleMessage('Error', 'Algo salio mal!', 'danger');
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
