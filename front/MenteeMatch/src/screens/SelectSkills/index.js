import React, { useEffect, useState } from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { getSkills } from '../../redux/Reducers/Skills';
import { simpleMessage } from '../../utils';
import goBack from '../../assets/static/goBack.png';
import styles from './styles';
import { updateUser } from '../../redux/Reducers/UserReducer';
import { login } from '../../redux/Slices/authSlice';

const SelectSkills = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const skills = useSelector(state => state.skills);
  const [buttonsStyle, setButtonsStyle] = useState({});
  const [selection, setSelection] = useState([]);
  const [menteesQty, setMenteesQty] = useState(1);

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const handleNext = () => {
    if (selection.length < 5) {
      return simpleMessage(
        '¡Atención!',
        'Debes seleccionar al menos 5 habilidades',
        'warning',
      );
    }
    const [property, learnOrTeach] = user.skillsToTeach.length
      ? ['skillsToLearn', 'learn']
      : ['skillsToTeach', 'teach'];

    dispatch(
      updateUser({
        url: `/api/users/skills/${learnOrTeach}`,
        data: { [property]: selection },
      }),
    );
    setSelection([]);
    setButtonsStyle({});

    if (learnOrTeach === 'learn') {
      dispatch(login({ token: user.token }));
    }
  };

  const handlePress = item => {
    if (!buttonsStyle[item.name]) {
      return setButtonsStyle({
        ...buttonsStyle,
        [item.name]: { ...item, styles: styles.pressed },
      });
    }
    const updatedButtonsStyle = { ...buttonsStyle };
    delete updatedButtonsStyle[item.name];
    setButtonsStyle(updatedButtonsStyle);
  };

  useEffect(() => {
    const selectedSkills = Object.values(buttonsStyle);
    const finalSkillsIds = selectedSkills.map(skill => ({ _id: skill._id }));
    setSelection(finalSkillsIds);
  }, [Object.keys(buttonsStyle).length]);

  const handleChangeQty = number => {
    const totalQty = menteesQty + number;
    if (totalQty >= 1 && totalQty <= 5) {
      setMenteesQty(menteesQty + number);
    } else if (totalQty < 1) {
      simpleMessage(
        '¡Atención!',
        'No puedes tener una cantidad menor a uno',
        'warning',
      );
    } else if (totalQty > 5) {
      simpleMessage(
        '¡Atención!',
        `Solo puedes tener hasta ${totalQty - 1} mentees`,
        'warning',
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {user.skillsToTeach.length
            ? '¿Qué quieres aprender?'
            : '¿Qué conocimientos tienes?'}
        </Text>
      </View>

      <View style={styles.btnsContainer}>
        <FlatList
          scrollEnabled={true}
          contentContainerStyle={{
            alignSelf: 'center',
            alignItems: 'center',
          }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={skills}
          keyExtractor={skills => skills._id}
          renderItem={({ item }) => (
            <Pressable
              style={[styles.pressable, buttonsStyle[item.name]?.styles]}
              onPress={() => handlePress(item)}>
              <Text style={styles.pressableTxt}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      {user.isMentor && (
        <View>
          <Text style={styles.menteeQtyTitleTxt}>
            Cantidad de mentees a mentorear
          </Text>
          <View style={styles.menteeQtyBox}>
            <Button
              title="-"
              style={styles.menteeQtyBtn}
              pressFunction={() => handleChangeQty(-1)}
            />
            <Text style={styles.menteeQtyTxt}>{menteesQty}</Text>
            <Button
              title="+"
              style={styles.menteeQtyBtn}
              pressFunction={() => handleChangeQty(+1)}
            />
          </View>
        </View>
      )}

      <View style={styles.footer}>
        <Button
          title={'Siguiente'}
          style={styles.nextBtn}
          pressFunction={handleNext}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectSkills;
