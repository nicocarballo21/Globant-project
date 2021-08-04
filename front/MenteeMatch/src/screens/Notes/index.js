import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Card from './Card';
import { useSelector } from 'react-redux';

import {
  postNote,
  getNotes,
  deleteNote,
} from '../../services/notesAxiosServices';

import { simpleMessage } from '../../utils/index';

const Notes = ({ route }) => {
  const [newData, setNewData] = useState(false);
  const [notes, setnotes] = useState([]);
  const { userToken } = useSelector(state => state.auth);
  const mentee = route.params.mente;

  useEffect(() => {
    const get = async () => {
      const res = await getNotes(userToken, mentee._id);
      setnotes(res.data);
    };
    get();
  }, [newData]);

  const handleAdd = async (userToken, menteeId, data) => {
    const res = await postNote(userToken, menteeId, data);
    console.log(res);
    if (res) {
      simpleMessage(
        'Nota agregado',
        'La nota fue agregada correctamente',
        'success',
      );
      setNewData(!newData);
    }
  };

  const handleDelete = async noteId => {
    const res = await deleteNote(userToken, noteId);
    if (res) setNewData(!newData);
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
        notes={notes}
        userToken={userToken}
        functions={{ handleAdd, handleDelete, handleEdit }}
      />
    </View>
  );
};

export default Notes;
