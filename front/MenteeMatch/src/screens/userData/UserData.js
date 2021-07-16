import React, { useState } from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-dom';
import PersonalInformation from '../../components/register/PersonalInformation';

export default () => {
  const history = useHistory();
  const [phone, setPhone] = useState('');
  const [workPosition, setWorkPosition] = useState('');
  const [country, setCountry] = useState('');
  const [about, setAbout] = useState('');

  handleChangePhone = phone => {
    const value = phone;
    setPhone(value);
  };
  handleChangeWorkPosition = workPosition => {
    const value = workPosition;
    setWorkPosition(value);
  };
  handleChangeCountry = country => {
    const value = country;
    setCountry(value);
  };
  handleChangeAbout = about => {
    const value = about;
    setAbout(value);
  };

  return (
    <View>
      <PersonalInformation
        history={history}
        handleChangePhone={handleChangePhone}
        handleChangeWorkPosition={handleChangeWorkPosition}
        handleChangeCountry={handleChangeCountry}
        handleChangeAbout={handleChangeAbout}
      />
    </View>
  );
};
