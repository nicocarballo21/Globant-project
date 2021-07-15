import React from 'react';
import {View, Image} from 'react-native';

import logo from '../../utils/logo.png';
import styles from './styles';

const firstScreen = () => {
  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default firstScreen;
