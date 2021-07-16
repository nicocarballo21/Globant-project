import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const input = props => {
  const { onChangeText, value, placeholder, textContentType } = props;
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      textContentType={textContentType}
      {...props}
    />
  );
};

export default input;
