import React from 'react';
import { View } from 'react-native';
import { sendUserRegister } from '../../services/reduxServices';
import Register from '../../components/register/Register';

export default ({ navigation }) => {
  function onSubmit(data) {
    if (data.password === data.passwordConf && data) {
      sendUserRegister(data);
      navigation.navigate('UserData');
    }
  }

  return (
    <View>
      <Register onSubmit={onSubmit} />
    </View>
  );
};
