import React, { useEffect, useState } from 'react';
import styles from './styles';
import {
  View,
  Pressable,
  Image,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import { useHistory } from 'react-router-native';
import goBack from '../../assets/static/goBack.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import colors from '../../assets/styles/colors';
import { getSkills } from '../../redux/Reducers/Skills';

const SelectSkill = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [isPressed, setIsPressed] = useState(false);
  const { skills } = user;

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const handleGoBack = () => {
    history.goBack();
  };

  const numColumns = Math.ceil(skills.length / 4);
  const keys = skills.map(skill => ({ key: skill }));

  const handlePress = (event, item) => {
    console.log(event.target);
    console.log(item);
    setIsPressed(!isPressed);
  };

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
              numColumns={numColumns}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={skills}
              keyExtractor={keys => keys}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? 'blue' : colors.blackPearl,
                      borderColor: pressed ? colors.charade : 'blue',
                    },
                    styles.pressable,
                  ]}
                  onPress={event => handlePress(event, item)}>
                  <Text style={styles.pressableTxt} /* onPress={handlePress} */>
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          </ScrollView>
        </View>
        <Button title={'Siguiente'} pressFunction={handleGoBack} />
      </View>
    </View>
  );
};

export default SelectSkill;
