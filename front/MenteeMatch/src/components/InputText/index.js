import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const input = props => {
  const { errors } = props;
  return <TextInput style={errors ? styles.error : styles.input} {...props} />;
};

export default input;
