import React, { useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import userImg from '../../assets/static/user_img.png';
import goBack from '../../assets/static/goBack.png';
import { getSkills } from '../../redux/Reducers/Skills';
import { setUserImg, getData, removeData } from '../../utils/storage';

//import { launchImageLibrary } from 'react-native-image-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { logout } from '../../redux/Slices/authSlice'

const UserDetails = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const skills = user.skillsToTeach;
  const dispatch = useDispatch();
  const { name, surname, email, position } = user;
  /* const numColumns = Math.ceil(skills.length / 4); */
  const [img, setImg] = React.useState(null);

  useEffect(() => {
    dispatch(getSkills());
    getData('userImg').then(data => {
      if (data) setImg(data);
    });
  }, [dispatch, img]);

  const handleGoBack = async () => {
    try {
      await removeData('user');
      dispatch(logout())
    } catch (error) {
      console.log(error);
    }
  };
  const onPicture = uri => {
    setImg(uri);
    setUserImg(uri);
  };

    const choosePhoto = () => {
        sheetRef.current.snapTo(2)
        //const options = {
        //    mediaType: "photo",
        //    noData: true,
        //};
        //launchImageLibrary(options, response => {
        //    if (response.didCancel) return;
        //    else {
        //        setImg(response.assets[0].uri)
        //        setUserImg(response.assets[0].uri)
        //    }
        //}) 
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
                console.log(image);
                setImg(image.path);
                setUserImg(image.path)
            });
    }
    
    const renderContent = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Subir foto</Text>
                <Text style={styles.panelSubtitle}>Elija su foto de perfil</Text>
            </View>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => navigation.navigate("Camera", { onPicture: onPicture })} 
            >
                <Text style={styles.panelButtonTitle}>Tomar foto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => choosePhoto()} 
            >
            <Text style={styles.panelButtonTitle}>Elige de la biblioteca</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => sheetRef.current.snapTo(2)}
            >
                <Text style={styles.panelButtonTitle}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
 
    const sheetRef = React.useRef(null);
//renderComponent={handleGoBack}
  return (
      <SafeAreaView style={{flex:1}}>
    <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 200, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={2}
      />
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Pressable style={styles.pressableImg} onPress={() => navigation.toggleDrawer() }>
          <Ionicons name="reorder-three" size={50} color="#BFD732" />
        </Pressable>
      </View>
      <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          {img ? (
            <Image source={{ uri: img }} style={styles.userImg} />
          ) : (
            <Image
              source={user.img ? { uri: user.img } : userImg}
              style={styles.userImg}
            />
          )}
        </TouchableOpacity>
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
              alignItems: 'center',
            }}
            numColumns={4}
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
    </SafeAreaView>
      </SafeAreaView>
  );
};

export default UserDetails;
