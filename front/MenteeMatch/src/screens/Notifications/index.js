import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Information from './Information';
import Solicitud from './Solicitud';
import useMode from '../../hooks/useMode';

import styles from './styles';
const Notifications = () => {
  const { mode } = useMode();

  const data = [
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'solicitud',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'confirmation',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'rechazo',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'asignacion',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'solicitud',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'confirmation',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'rechazo',
    },
    {
      emisor: '610328b7afb38cd4d0c8e60d',
      receptor: '610328b7afb38cd4d0c8e60c',
      type: 'asignacion',
    },
  ];

  const handleRenderItem = ({ item }) => {
    if (item.type === 'solicitud') {
      return <Solicitud item={item} />;
    } else {
      return <Information item={item} />;
    }
  };
  return (
    <View style={{ ...styles.mainContainer, backgroundColor: mode.bg }}>
      <FlatList
        numColumns={1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(not, index) => not.receptor + index}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

export default Notifications;
