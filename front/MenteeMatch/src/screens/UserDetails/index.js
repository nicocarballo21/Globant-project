import React, {useEffect} from 'react';
import {View, Text, Pressable, Image, FlatList, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import userImg from '../../assets/static/user_img.png';
import goBack from '../../assets/static/goBack.png';
import {useHistory} from 'react-router-native';
import {getSkills} from '../../services/reduxServices';
import axios from 'axios';
import {setUser} from '../../redux/Reducers/UserReducer';
import { removeData } from '../../utils/storage';

const UserDetails = () => {
  console.log("holaaaaaaaaaaaaaaaa")
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const {name, surname, email, position, skills} = user;
  const numColumns = Math.ceil(skills.length / 4);
  const keys = skills.map(skill => ({key: skill}));

  /* let skills = []
  useEffect(async () => {
    try {
      const res = await axios.get('http://10.0.2.2:3000/api/skills');
      const skillsArray = await res.data;
      skills = skillsArray.map(skill => skill.name);
      dispatch(setUser({...user, skills}));
    } catch (error) {
      console.log(error);
    }
  }, [skills.length]) */
  /* console.log(skills); */

  const handleGoBack = async () => {
    try {
      await removeData('user')
      history.goBack();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressableImg} onPress={handleGoBack}>
          <Image source={goBack} style={styles.arrowImg} />
        </Pressable>
        <Text style={styles.headerText}>Perfil del usuario</Text>
      </View>
      <Image source={userImg} style={styles.userImg} />
      <Text style={styles.keyText}>Nombre</Text>
      <Text style={styles.valueText}>{`${name} ${surname}`}</Text>
      <Text style={styles.keyText}>Contacto</Text>
      <Text style={styles.valueText}>{email}</Text>
      <Text style={styles.keyText}>Posición</Text>
      <Text style={styles.valueText}>{position}</Text>
      <Text style={styles.skillsText}>Skills:</Text>
      <View style={styles.btnsContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 20}}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={skills}
            keyExtractor={keys => keys}
            renderItem={({item}) => (
              <Pressable style={styles.pressable}>
                <Text style={styles.pressableTxt}>{item}</Text>
              </Pressable>
            )}
          />
        </ScrollView>
      </View>

      <Pressable style={styles.btn} onPress={handleGoBack}>
        <Text style={styles.btnText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
};

export default UserDetails;
