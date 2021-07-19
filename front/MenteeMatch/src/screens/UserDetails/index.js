import React, { useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import userImg from '../../assets/static/user_img.png';
import goBack from '../../assets/static/goBack.png';
import { removeData } from '../../utils/storage';
import { getSkills } from '../../redux/Reducers/Skills';

const UserDetails = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const skills = useSelector (state => state.skills)
  const dispatch = useDispatch()
  const { name, surname, email, position } = user;
  /* const numColumns = Math.ceil(skills.length / 4); */

  useEffect(() => {
    dispatch(getSkills())
  }, [])

  const handleGoBack = async () => {
    try {
      await removeData('user');
      navigation.goBack()
    } catch (error) {
      console.log(error);
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
          contentContainerStyle={{ paddingVertical: 20 }}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={7}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={skills}
            keyExtractor={skills => skills._id}
            renderItem={({ item }) => (
              <Pressable style={styles.pressable}>
                <Text style={styles.pressableTxt}>{item.name}</Text>
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
