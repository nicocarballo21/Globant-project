import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useSelector } from 'react-redux';

import { globantBright, globantDark } from '../../assets/styles/colors';
import styles from './styles';

function ChecKBoxText({ text, isChecked, onPress }) {
  const { theme } = useSelector(state => state);
  const mode = theme === 'ligth' ? globantBright : globantDark;

  return (
    <View style={styles.optionContainer}>
      <BouncyCheckbox
        text={text}
        fillColor={mode.green}
        iconStyle={{ borderColor: mode.green }}
        textContainerStyle={{
          ...styles.option,
          borderColor: mode.grey,
          backgroundColor: mode.lightgray,
        }}
        textStyle={{ ...styles.text, color: mode.text }}
        disableBuiltInState
        isChecked={isChecked}
        onPress={onPress}
      />
    </View>
  );
}

export default ChecKBoxText;
