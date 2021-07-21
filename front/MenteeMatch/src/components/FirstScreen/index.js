import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import logo from '../../utils/logo.png';
import styles from './styles';

const FirstScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      //navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default FirstScreen;
