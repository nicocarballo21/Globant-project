import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import useMode from '../../hooks/useMode';
import styles from './styles';

const ToolTipModal = ({ visible, handleClose }) => {
  const { mode } = useMode();
  return (
    <Modal
      visible={visible}
      onRequestClose={handleClose}
      transparent={true}
      animationType="slide">
      <View style={styles.mainContainer}>
        <Icon
          style={styles.iconContainer}
          onPress={handleClose}
          name="close-outline"
          size={40}
          color={mode.lightgray}
        />
        <View style={styles.msgContainer}>
          <View style={styles.textContainer}>
            <Text style={{ ...styles.text, backgroundColor: mode.inputBg }}>
              Para confirmar tu elección podés hacer click en el boton de la
              esquina superior derecha
            </Text>
            <View style={{ ...styles.flecha, borderLeftColor: mode.inputBg }} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={{
                ...styles.likeButton,
                backgroundColor: mode.grass,
              }}
              title={'✔'}
              onPress={handleClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ToolTipModal;
