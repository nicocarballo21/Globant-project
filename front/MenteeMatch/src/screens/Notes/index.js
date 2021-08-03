import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Card from './Card';

// import { simpleMessage } from '../../utils/index';

const Notes = ({ route }) => {
  const mentee = route.params.mente;

  const handleAdd = () => {
    // const res = await postObjectivesToUser(mentee._id, userToken, objective);

    // if (res) {
    //   simpleMessage(
    //     'Objetivo agregado',
    //     'El objetivo fue agregado correctamente',
    //     'success',
    //   );
    //   setstate(!state);
    // }
    console.log('add');
  };

  const handleDelete = () => {
    // const res = await deleteObjectivesToUser(mentee._id, userToken, objetiveId);
    // if (res) setstate(!state);
    console.log('delete');
  };

  const handleEdit = () => {
    // const res = updateObjectivesToUser(userToken, objectiveId, data);
    // if (res) {
    //   simpleMessage(
    //     'Objetivo editado',
    //     'El objetivo fue editado correctamente',
    //     'success',
    //   );
    //   setstate(!state);
    // }
    console.log('edit1');
  };
  return (
    <View>
      <Card
        mentee={mentee}
        functions={{ handleAdd, handleDelete, handleEdit }}
      />
    </View>
  );
};

export default Notes;
