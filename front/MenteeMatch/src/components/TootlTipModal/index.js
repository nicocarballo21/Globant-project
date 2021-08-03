import React from 'react';
import { Modal, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import useMode from '../../hooks/useMode';
import styles from './styles';

const ToolTipModal = ({ visible, handleClose }) => {
  const { mode } = useMode();
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.mainContainer}>
        <Icon onPress={handleClose} name="close" size={40} color={'#006606'} />
        <Text> Soy el Modal</Text>
      </View>
    </Modal>
  );
};

export default ToolTipModal;
