import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import logo from '../../utils/logo.png';
import logoG from '../../utils/logoG.png';
import styles from './styles';

const FirstScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
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
