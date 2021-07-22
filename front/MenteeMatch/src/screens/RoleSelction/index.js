import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { updateUser } from '../../redux/Reducers/UserReducer';
import { Button, CheckBoxText } from '../../components';
import styles from './styles';

const RoleSelection = () => {
  const [boxUno, setBoxUno] = useState(false);
  const [boxDos, setBoxDos] = useState(false);
  const [role, setRole] = useState('');
  const dispatch = useDispatch();

  const handleMenteeOp = () => {
    if (!boxUno) {
      setBoxUno(true);
      setBoxDos(false);
      setRole('mentee');
    }
  };

  const handleMentorOp = () => {
    if (!boxDos) {
      setBoxDos(true);
      setBoxUno(false);
      setRole('mentor');
    }
  };

  const confirmOption = () => {
    dispatch(updateUser({ url: `/api/users/${role}`, data: {} }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Quiero ser...'}</Text>
      <CheckBoxText text="Mentee" isChecked={boxUno} onPress={handleMenteeOp} />
      <CheckBoxText text="Mentor" isChecked={boxDos} onPress={handleMentorOp} />
      <Button
        title="Siguiente"
        pressFunction={confirmOption}
        style={styles.button}
      />
    </View>
  );
};

export default RoleSelection;
