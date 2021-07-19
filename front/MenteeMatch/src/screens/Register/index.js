import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { sendUserRegister } from '../../services/reduxServices';
import Register from '../../components/register/Register';

export default () => {
  const history = useHistory();

  const onSubmit = data => {
    if (data.password === data.passwordConf && data) {
      sendUserRegister(data);
      history.push('/registerAcedemic');
    }
  };

  return (
    <View>
      <Register onSubmit={onSubmit} />
    </View>
  );
};
