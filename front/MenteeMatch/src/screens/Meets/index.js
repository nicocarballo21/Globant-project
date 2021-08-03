import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getMeets } from '../../services/reduxServices'

const Meets = () => {
  const dispatch = useDispatch();
  const meets = dispatch(getMeets())

  return (
    <View>
        <Text>Reuniones:</Text>
        {meets.length ?? meets.map(meet => 
        <Text style={{borderWidth: 2}}>
            {meet.title, '\n', meet.description, '\n', meet.date}
        </Text>
        )}
    </View>
  );
};

export default Meets;