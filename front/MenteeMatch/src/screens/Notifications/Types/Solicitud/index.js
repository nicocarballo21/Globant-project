import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';

import useMode from '../../../../hooks/useMode';
import useAlert from '../../../../hooks/useAlert';
import { deleteNotification } from '../../../../redux/Reducers/UserReducer';
import { ConfirmAlert } from '../../../../components';
import styles from '../styles';

const Solicitud = ({ item }) => {
  const { mode } = useMode();
  const { emisor } = item;
  const { show, handleClose, handleOpen } = useAlert();
  const dispatch = useDispatch();

  const handleConfirmation = () => {
    dispatch(deleteNotification(item.id));
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
          }}>{`${emisor.name} ${emisor.surname} quiere ser tu mentor`}</Text>
      </View>
      <View style={styles.buttons}>
        <Icon
          onPress={handleOpen}
          name="check-circle"
          size={40}
          color={'#006606'}
        />
        <Icon name="times-circle" size={40} color={'#aa0000'} />
      </View>
      <ConfirmAlert
        show={show}
        handleClose={handleClose}
        emisor={item.emisor}
        handleConfirm={() => {}}
      />
    </View>
  );
};

export default Solicitud;
