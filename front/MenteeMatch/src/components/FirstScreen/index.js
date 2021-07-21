import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import logo from '../../utils/logo.png';
import logoG from '../../utils/logoG.png';
import styles from './styles';

const FirstScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      //navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.background}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.logo_g_container}>
        <Image style={styles.logoG} source={logoG} />
      </View>
    </View>
  );
};

export default FirstScreen;
