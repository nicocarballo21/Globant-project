import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Card from './Card';

import { simpleMessage } from '../../utils/index';

const data = [
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
  {
    title: 'titulo',
    description: 'este es el cuerpo de la notas. ',
  },
];

const Notes = ({ route }) => {
  const mentee = route.params.mente;
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    const get = async () => {
      // hacer el get de las notas al back`
      // setnotes(notas);
    };

    get();
  }, []);

  // const handleAdd = async objective => {
  //   const res = await postObjectivesToUser(mentee._id, userToken, objective);

  //   if (res) {
  //     simpleMessage(
  //       'Objetivo agregado',
  //       'El objetivo fue agregado correctamente',
  //       'success',
  //     );
  //     setstate(!state);
  //   }
  // };

  // const handleDelete = async objetiveId => {
  //   const res = await deleteObjectivesToUser(mentee._id, userToken, objetiveId);
  //   if (res) setstate(!state);
  // };

  // const handleEdit = async (objectiveId, data) => {
  //   const res = updateObjectivesToUser(userToken, objectiveId, data);
  //   if (res) {
  //     simpleMessage(
  //       'Objetivo editado',
  //       'El objetivo fue editado correctamente',
  //       'success',
  //     );
  //     setstate(!state);
  //   }
  // };
  return (
    <View>
      <Card notes={data} mentee={mentee} />
    </View>
  );
};

export default Notes;
