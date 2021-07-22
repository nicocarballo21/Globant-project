import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { globantBright } from '../../assets/styles/colors';

const input = props => {
  const { errors } = props;

  return (
    <TextInput
      style={errors ? styles.error : styles.input}
      {...props}
      placeholderTextColor={globantBright.text}
    />
  );
};

export default input;
