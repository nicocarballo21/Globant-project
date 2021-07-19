import React from 'react';
import { View } from 'react-native';
import { sendUserRegister } from '../../services/reduxServices';
import { useNavigation } from '@react-navigation/native';

import Register from '../../components/Register';

import { simpleMessage } from '../../utils';

export default () => {
  const navigation = useNavigation();

  const onSubmit = data => {
    if (data.password === data.passwordConf && data) {
      sendUserRegister(data).then(() => navigation.navigate('UserData'));

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
