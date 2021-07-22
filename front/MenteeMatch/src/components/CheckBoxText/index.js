import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { globantBright } from '../../assets/styles/colors';
import styles from './styles';

function ChecKBoxText({ text, isChecked, onPress }) {
  return (
    <View style={styles.optionContainer}>
      <BouncyCheckbox
        text={text}
        fillColor={globantBright.green}
        iconStyle={{ borderColor: globantBright.green }}
        textContainerStyle={styles.option}
        textStyle={styles.text}
        disableBuiltInState
        isChecked={isChecked}
        onPress={onPress}
      />
    </View>
  );
}

export default ChecKBoxText;
