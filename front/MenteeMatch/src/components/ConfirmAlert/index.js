import React from 'react';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import useMode from '../../hooks/useMode';

const ConfirmAlert = ({ show, handleClose, emisor, handleConfirm }) => {
  const { mode } = useMode();
  return (
    <SCLAlert
      show={show}
      onRequestClose={handleClose}
      theme="success"
      title="¡Perfecto!"
      titleStyle={{
        color: mode.text,
      }}
      subtitleStyle={{
        color: mode.text,
      }}
      innerStyle={{
        backgroundColor: mode.bg,
      }}
      headerContainerStyles={{
        backgroundColor: mode.bg,
      }}
      subtitle={`¿Quieres confirmar a ${emisor.name} ${emisor.surname} cómo tu mentor?`}>
      <SCLAlertButton
        theme="info"
        onPress={() => {
          // ACÁ HAY QUE HACER LOGICA DE SETEO DE MENTEE Y MENOTR
          handleConfirm();
          handleClose();
        }}>
        Confirmar
      </SCLAlertButton>
      <SCLAlertButton theme="default" onPress={handleClose}>
        Cancelar
      </SCLAlertButton>
    </SCLAlert>
  );
};

export default ConfirmAlert;
