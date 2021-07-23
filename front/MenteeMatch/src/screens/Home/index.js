import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import HomeView from '../../components/HomeView';

const Home = () => {
  const user = useSelector(state => state.user);
  return user.mentor ? (
    <>
      <HomeView />
    </>
  ) : (
    <Text
      style={{
        fontSize: 32,
        textAlign: 'center',
        height: '100%',
        textAlignVertical: 'center',
      }}>
      No tenés ningún mentor asignado
    </Text>
  );
};

export default Home;
