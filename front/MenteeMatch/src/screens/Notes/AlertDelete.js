import React from 'react';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AlertDelete = ({ show, toggle, handleDelete, noteId }) => {
  return (
    <SCLAlert
      show={show}
      onRequestClose={toggle}
      theme="danger"
      title="Atencion!"
      subtitle="Estas por eliminar un objetivo"
      headerIconComponent={
        <Ionicons name="alert-outline" size={32} color="white" />
      }>
      <SCLAlertButton theme="info" onPress={() => handleDelete(noteId)}>
        Eliminar
      </SCLAlertButton>
      <SCLAlertButton theme="default" onPress={toggle}>
        Cancelar
      </SCLAlertButton>
    </SCLAlert>
  );
};

export default AlertDelete;
