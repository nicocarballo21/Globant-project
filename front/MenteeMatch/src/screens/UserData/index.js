import React from 'react';
import { View } from 'react-native';
import { sendUserData } from '../../services/reduxServices';
import PersonalInformation from '../../components/Register/PersonalInformation';

import { simpleMessage } from '../../utils';

export default () => {
  const onSubmit = data => {
    sendUserData(data)
      .then(() =>
        simpleMessage(
          'Registro exitoso',
          'Su usuario fue registrado correctamente',
          'success',
        ),
      )
      .catch(() => simpleMessage('Error', 'Algo ha ocurrido', 'danger'));
  };

  return (
    <View>
      <PersonalInformation onSubmit={onSubmit} />
    </View>
  );
};
