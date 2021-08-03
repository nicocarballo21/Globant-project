import React from 'react';
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
import useMode from '../../hooks/useMode';

export default () => {
  const { mode } = useMode();
  const user = useSelector(state => state.user);
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, backgroundColor: mode.bg }}>
      <Text style={styles.title}>
        {user.mentees.length
          ? 'Tus mentees son los siguientes:'
          : 'No tienes mentees asignados todavia. Dirígete al Matcher para seleccionar mentees'}
      </Text>
      <View
        style={{
          ...styles.block,
          backgroundColor: mode.bg,
          borderColor: mode.inputBg,
        }}>
        <ScrollView>
          {user.mentees.map(mentee => (
            <View style={styles.bord} key={mentee._id}>
              <Image
                onPress={() => navigation.navigate('UserViewModel')}
                style={styles.img}
                source={{ uri: mentee.img }}
              />
              <Text
                onPress={() =>
                  navigation.navigate('UserViewModel', { name: mentee })
                }
                style={styles.name}>
                {`${mentee.name} ${mentee.surname}`}
              </Text>

              <View>
                <Menu>
                  <MenuTrigger
                    children={
                      <Ionicons
                        style={styles.threePoints}
                        name="ellipsis-vertical"
                        size={40}
                        color="#BFD732"
                      />
                    }
                  />
                  <MenuOptions>
                    <MenuOption
                      onSelect={() =>
                        navigation.navigate('Objectives', {
                          mente: mentee,
                        })
                      }
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
