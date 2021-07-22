import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import HomeView from '../../components/HomeView';

const Home = () => {
  const user = useSelector(state => state.user);
  return user.mentor ? (
    <View>
      <HomeView />
    </View>
  ) : (
    <Text
      style={{
        fontSize: 32,
        textAlign: 'center',
        height: '100%',
        textAlignVertical: 'center',
      }}>
      {user.isMentee ? `No tenés ningún mentor asignado` : `No tenés mentees asignados`}
    </Text>
  );
};

export default Home;
