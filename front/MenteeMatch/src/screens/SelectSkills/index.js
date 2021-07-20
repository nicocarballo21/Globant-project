import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Pressable, Image, Text, ScrollView, FlatList, Button } from 'react-native';
import goBack from '../../assets/static/goBack.png';
import { useDispatch, useSelector } from 'react-redux';
import {default as ModifiedButton} from '../../components/Button';
import { getSkills } from '../../redux/Reducers/Skills';

const SelectSkills = ({ navigation }) => {
  const dispatch = useDispatch()
  const skills = useSelector(state => state.skills);
  const [buttonsStyle, setButtonsStyle] = useState({})
  const [selection, setSelection] = useState([])

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePress = item => {
    if(!buttonsStyle[item.name])
      return setButtonsStyle({...buttonsStyle, [item.name]: {...item, styles: styles.pressed} })
    
    const updatedButtonsStyle = {...buttonsStyle}
    delete updatedButtonsStyle[item.name]
    setButtonsStyle(updatedButtonsStyle)
    /* setButtonsStyle({...buttonsStyle, [item.name]: buttonsStyle[item.name].styles === styles.unpressed ? {...item, styles: styles.pressed} : null }) */
  }

  useEffect(() => {
    const selectedSkills = Object.values(buttonsStyle)
    const finalSkillsIds = selectedSkills.map(skill => ({_id: skill._id }))
    setSelection(finalSkillsIds)
  }, [Object.keys(buttonsStyle).length])

  /* console.log(buttonsStyle) */
  console.log("Selection ->", selection)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressableImg} onPress={handleGoBack}>
          <Image source={goBack} style={styles.arrowImg} />
        </Pressable>
        <Text style={styles.headerText}>Selecciona las skills</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.btnsContainer}>
          <ScrollView
            /* horizontal */
            pagingEnabled
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 20 }}>
            <FlatList
              scrollEnabled={true}
              contentContainerStyle={{
                alignSelf: 'center',
                alignItems: 'center'
              }}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={skills}
              keyExtractor={skills => skills._id}
              renderItem={({ item }) => (
                <Pressable style={[styles.pressable, buttonsStyle[item.name]?.styles]} onPress={() => handlePress(item)} >
                  <Text style={styles.pressableTxt} /* onPress={handlePress} */>{item.name}</Text>
                </Pressable>
              )}
            />
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.menteeSelectionTxt}>Cantidad de mentees a mentorear</Text>
      </View>
      <ModifiedButton title={'Siguiente'} pressFunction={handleGoBack} />
    </View>
  );
};


export default SelectSkills;
