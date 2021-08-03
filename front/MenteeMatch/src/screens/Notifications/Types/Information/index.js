import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

import useMode from '../../../../hooks/useMode';
import { deleteNotification } from '../../../../redux/Reducers/UserReducer';
import styles from '../styles';

const Information = ({ item }) => {
  const { mode } = useMode();
  const { emisor } = item;
  const dispatch = useDispatch();

  const handleSeen = () => {
    dispatch(deleteNotification(item._id));
  };

  const message = () => {
    if (item.type === 'confirmation') {
      return `${emisor.name} ${emisor.surname} ha aceptado tu solicitud como mentor, felicidades!!`;
    } else if (item.type === 'rechazo') {
      return `${emisor.name} ${emisor.surname} ha rechazado tu solicitud.`;
    } else if (item.type === 'asignacion') {
      return `${emisor.name} ${emisor.surname} te ha sido asignado como mentee.`;
    }
  };
  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: mode.inputBg,
      }}>
      <View style={styles.imgContainer}>
        <Image
          style={{ ...styles.img, borderColor: mode.violet }}
          source={{ uri: emisor.img }}
        />
      </View>
      <View style={styles.message}>
        <Text
          style={{
            color: mode.text,
          }}>
          {message()}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Icon
          onPress={handleSeen}
          name="check-circle"
          size={40}
          color={'#006606'}
        />
      </View>
    </View>
  );
};

export default Information;
