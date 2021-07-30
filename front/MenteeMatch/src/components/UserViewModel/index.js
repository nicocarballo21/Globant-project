import React, { useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setUserImg, getData } from '../../utils/storage';
import { getSkills } from '../../redux/Reducers/Skills';
import userImg from '../../assets/static/user_img.png';
import styles from './styles';

import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ({ navigation }) => {
  const user = useSelector(state => state.user);
  const skills = user.skillsToTeach;
/*   const dispatch = useDispatch(); */
  const { name, surname, email, position, img } = user;


 /*  useEffect(() => {
    if(!user) navigation.navigate('Login');
    dispatch(getSkills());
    getData('userImg').then(data => {
      data && setImg(data);
    });
  }, [dispatch, img]); */

/*   const onPicture = uri => {
    setImg(uri);
    setUserImg(uri);
  }; */

  const choosePhoto = () => {
    sheetRef.current.snapTo(2);
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setImg(image.path);
      setUserImg(image.path);
    });
  };



  const sheetRef = React.useRef(null);

  return (
    <SafeAreaView style={styles.mainContainer}>
    {/*   <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 200, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={2}
      /> */}

      <SafeAreaView style={styles.container}>
        <View style={styles.pressableFoto}>
            <Image source={{ uri: img }} style={styles.userImg} />
            {console.log(img)}
        </View>

        <View style={styles.UserInfo}>
          <Text style={styles.keyText}>Nombre: {`${name} ${surname}`}</Text>
          <Text style={styles.keyText}>Contacto: {email}</Text>
          <Text style={styles.keyText}>Posición: {position}</Text>
        </View>

        <View style={styles.btnsContainer}>
          <Text style={styles.btns_title}>Habilidades</Text>
          <View style={styles.flatlist}>
            <FlatList
              scrollEnabled={true}
              numColumns={3}
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
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};
