import React from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import useMode from '../../hooks/useMode';
import { Information, Solicitud } from './Types';

import styles from './styles';
import { Button } from '../../components';

import { updateUser } from '../../redux/Reducers/UserReducer';

const Notifications = () => {
  const { mode } = useMode();
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const url = '/api/users/profile';

  const handleRenderItem = ({ item }) => {
    if (item.type === 'solicitud') {
      return <Solicitud item={item} />;
    } else {
      return <Information item={item} />;
    }
  };

  const handleReloadNotifications = () => {
    dispatch(updateUser({ url, data: {} }));
  };

  return (
    <View style={{ ...styles.mainContainer, backgroundColor: mode.bg }}>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={user.notifications}
          keyExtractor={not => not._id}
          renderItem={handleRenderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Recargar"
          pressFunction={handleReloadNotifications}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Notifications;
