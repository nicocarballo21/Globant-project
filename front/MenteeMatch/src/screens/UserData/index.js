import React from 'react';
import { View } from 'react-native';
import { sendUserData } from '../../services/reduxServices';
import PersonalInformation from '../../components/Register/PersonalInformation';

export default () => {
  const onSubmit = data => {
    sendUserData(data);
  };

  return (
    <View>
      <PersonalInformation onSubmit={onSubmit} />
    </View>
  );
};
