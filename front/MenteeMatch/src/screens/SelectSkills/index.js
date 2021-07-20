import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Pressable, Image, Text, FlatList, SafeAreaView} from 'react-native';
import goBack from '../../assets/static/goBack.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { getSkills } from '../../redux/Reducers/Skills';

const SelectSkills = ({ navigation }) => {
  const dispatch = useDispatch()
  const skills = useSelector(state => state.skills);
  const [buttonsStyle, setButtonsStyle] = useState({})
  const [selection, setSelection] = useState([])
  const [menteesQty, setMenteesQty] = useState(1)

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const handleGoBack = () => {
    /* navigation.goBack(); */
  };

  const handlePress = item => {
    if(!buttonsStyle[item.name])
      return setButtonsStyle({...buttonsStyle, [item.name]: {...item, styles: styles.pressed} })
    
    const updatedButtonsStyle = {...buttonsStyle}
    delete updatedButtonsStyle[item.name]
    setButtonsStyle(updatedButtonsStyle)
  }

  useEffect(() => {
    const selectedSkills = Object.values(buttonsStyle)
    const finalSkillsIds = selectedSkills.map(skill => ({_id: skill._id }))
    setSelection(finalSkillsIds)
  }, [Object.keys(buttonsStyle).length])

  const handleChangeQty = (number) => {
    if(menteesQty + number >= 1 && menteesQty + number <= 5)
      setMenteesQty(menteesQty + number)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressableImg} onPress={handleGoBack}>
          <Image source={goBack} style={styles.arrowImg} />
        </Pressable>
        <Text style={styles.headerText}>Selecciona las skills</Text>
      </View>
        <View style={styles.btnsContainer}>
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
                  <Text style={styles.pressableTxt}>{item.name}</Text>
                </Pressable>
              )}
            />
        </View>
      <View>
        <Text style={styles.menteeQtyTitleTxt}>Cantidad de mentees a mentorear</Text>
        <View style={styles.menteeQtyBox}>
          <Button title="+" style={styles.menteeQtyBtn} pressFunction={() => handleChangeQty(+1)}/>
            <Text style={styles.menteeQtyTxt}>{menteesQty}</Text>
          <Button title="-" style={styles.menteeQtyBtn} pressFunction={() => handleChangeQty(-1)}/>
        </View>
      </View>
      <Button title={'Siguiente'} style={styles.nextBtn} pressFunction={handleGoBack} />
    </SafeAreaView>
  );
};


export default SelectSkills;
