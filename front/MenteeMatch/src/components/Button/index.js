import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const button = props => {
  const { title, pressFunction } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      title={title}
      onPress={pressFunction}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default button;
