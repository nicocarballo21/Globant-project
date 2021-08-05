import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { pullMeets } from '../../redux/Reducers/meetsReducer'
import useMode from '../../hooks/useMode';
import styles from './styles'

const Meets = ({navigation}) => {
  const { mode } = useMode();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const {meets} = useSelector(state => state.user)

  useEffect(() => {
    dispatch(pullMeets())
        .then(() =>  console.log('Meets', meets))
  },[])

  return (
    <View style={{ ...styles.container, backgroundColor: mode.bg }}>
        <Text style={{...styles.title, color: mode.text}}>Reuniones</Text>
        {meets && meets.length ? meets.map(meet => 
        <Text style={{...styles.module, color: mode.text}}>
            {meet.title, '\n', meet.description, '\n', meet.date}
        </Text>
        )
    :
    <Text style={{...styles.not, color: mode.text}}>No tienes reuniones agendadas.</Text>
    }
    <Button title='Nueva reunión' pressFunction={() => navigation.navigate('CreateMeet')} />
    </View>
  );
};

export default Meets;