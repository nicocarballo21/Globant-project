import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import PersonalInformation from '../../components/Register/PersonalInformation';

import { updateUser } from '../../redux/Reducers/UserReducer';

import { simpleMessage } from '../../utils';

export default () => {
  const dispatch = useDispatch();
  const onSubmit = personalData => {
    dispatch(updateUser(personalData))
      .then(payload => {
        if (payload) {
          simpleMessage(
            'Registro exitoso',
            'Su usuario fue registrado correctamente',
            'success',
          );
        } else simpleMessage('Error', 'Algo ha ocurrido', 'danger');
      })
      .catch(() => simpleMessage('Error', 'Algo ha ocurrido', 'danger'));
  };

  return (
    <View>
      <PersonalInformation onSubmit={onSubmit} />
    </View>
  );
};
