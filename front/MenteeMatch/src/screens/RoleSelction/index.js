import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { globantBright } from '../../assets/styles/colors';
import { Button, CheckBoxText } from '../../components';
import styles from './styles';

const RoleSelection = () => {
  const [boxUno, setBoxUno] = useState(false);
  const [boxDos, setBoxDos] = useState(false);
  const [role, setRole] = useState('');

  const handleMenteeOp = () => {
    if (!boxUno) {
      setBoxUno(true);
      setBoxDos(false);
    }
  };

  const handleMentorOp = () => {
    if (!boxDos) {
      setBoxDos(true);
      setBoxUno(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Quiero ser...'}</Text>
      <CheckBoxText text="Mentee" isChecked={boxUno} onPress={handleMenteeOp} />
      <CheckBoxText text="Mentor" isChecked={boxDos} onPress={handleMentorOp} />
      <Button
        title="Siguiente"
        pressFunction={() => {}}
        style={styles.button}
      />
    </View>
  );
};

export default RoleSelection;
