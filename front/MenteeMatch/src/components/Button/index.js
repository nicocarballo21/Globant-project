import React from 'react';
import { useSelector } from 'react-redux';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { globantBright, globantDark } from '../../assets/styles/colors';

const Button = props => {
  const { theme } = useSelector(state => state);
  const mode = theme === 'ligth' ? globantBright : globantDark;

  const { title, pressFunction, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          borderColor: mode.grey,
          backgroundColor: mode.green,
        },
        style,
      ]}
      title={title}
      onPress={pressFunction}>
      <Text style={(styles.buttonText, { color: mode.text })}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
