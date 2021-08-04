import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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
import { cancelMatch, cancelMatchMentor } from '../../redux/Reducers/UserReducer';
import user_img from '../../assets/static/user_img.png';


export default () => {

  const { mode } = useMode();
  let user = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleDelete = (mentorId, menteeId) => {
      dispatch(cancelMatch({data: {mentorId, menteeId}, token: user.token}))//saca el mentee del mentor
      dispatch(cancelMatchMentor({data: {mentorId, menteeId}, token: user.token}))//saca el mentor del mentee
  } 
 
  return (
    <View style={{ ...styles.container, backgroundColor: mode.bg }}>
      <Text style={{...styles.title, color: mode.text}}>
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
                source={mentee.img ? { uri: mentee.img } : user_img}
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
                    <View style={{ backgroundColor: mode.bg}}>
                    <MenuOption onSelect={() => navigation.navigate('Objectives', { mente: mentee,})}>
                      <Text style={{...styles.text, color: mode.text}}>Objetivos</Text>
                    </MenuOption>

                    <MenuOption onSelect={() => console.log('Reuniones')}>
                      <Text style={{...styles.text, color: mode.text}}>Reuniones</Text>
                    </MenuOption>

                    <MenuOption onSelect={() => handleDelete(user._id, mentee._id)}>
                      <Text style={{...styles.text, color: mode.text}}>Calcel Match</Text>
                    </MenuOption>
                    </View>
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
