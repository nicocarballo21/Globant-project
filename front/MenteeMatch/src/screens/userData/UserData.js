import React, { useState } from 'react';
import { View } from 'react-native';
import { sendUserData } from '../../services/reduxServices';
import PersonalInformation from '../../components/register/PersonalInformation';

export default () => {
  function onSubmit(data) { 
    sendUserData(data)
      console.log(data);
      history.push()
  }

  return (
    <View>
        <PersonalInformation onSubmit={onSubmit}/>
    </View>
  )
}

