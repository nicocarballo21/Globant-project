import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

const ModalEdit = ({ show, inputs, toggle, handleEdit, noteId }) => {
  const [title, settitle] = useState(inputs.title);
  const [note, setnote] = useState(inputs.note);

  return (
    <Dialog.Container visible={show}>
      <Dialog.Title style={{ color: 'white' }}>Edita tu nota!</Dialog.Title>
      <Dialog.Input
        color="white"
        label="Titulo"
        value={title}
        onChangeText={settitle}></Dialog.Input>

      <Dialog.Input
        color="white"
        label="Nota"
        value={note}
        onChangeText={setnote}></Dialog.Input>
      <Dialog.Button label="Cerrar" onPress={() => toggle()} />
      <Dialog.Button
        label="Editar"
        onPress={() => handleEdit(noteId, title, note) && toggle()}
      />
    </Dialog.Container>
  );
};

export default ModalEdit;
