import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import useMode from '../../hooks/useMode';
import { Information, Solicitud } from './Types';

import styles from './styles';
const Notifications = () => {
  const { mode } = useMode();
  const { user } = useSelector(state => state);

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
        data={user.notifications}
        keyExtractor={not => not._id}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

export default Notifications;
