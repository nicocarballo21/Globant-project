import React, { useState, Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { styles } from './styles';

export default () => {
  const user = useSelector(state => state.user);
  const usersLikes = useSelector(state => state.user.likes);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <ScrollView>
          {user.likedMentees.map(mentee => (
            <View style={styles.bord}>
              <Image
                onPress={() => navigation.navigate('UserViewModel')}
                style={styles.img}
                source={{ uri: mentee.img }}
              />
              <Text
                onPress={() => navigation.navigate('UserViewModel')}
                style={styles.name}>
                {`${mentee.name} ${mentee.surname}`}
              </Text>

              <View>
                <Menu>
                  <MenuTrigger
                    text={
                      <Ionicons
                        style={styles.threePoints}
                        name="ellipsis-vertical"
                        size={40}
                        color={'#BFD732'}
                      />
                    }
                  />
                  <MenuOptions>
                    <MenuOption
                      onSelect={() => console.log('Objetivos')}
                      text="Objetivos"
                    />
                    <MenuOption
                      onSelect={() => console.log('Reuniones')}
                      text="Reuniones"
                    />
                    <MenuOption
                      onSelect={() => console.log('Cacelar Match')}
                      text="Cancelar Match"
                    />
                  </MenuOptions>
                </Menu>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
