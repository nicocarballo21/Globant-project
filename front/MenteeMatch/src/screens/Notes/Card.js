import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import useMode from '../../hooks/useMode';

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
export default function CardComponent({ mentee, functions }) {
  const { handleAdd, handleEdit, handleDelete } = functions;
  const [notes, setnotes] = useState([]);
  const { mode } = useMode();

  //   useEffect(() => {
  //     const get = async () => {
  //       //hacerlo aca para subcrisbirse a los cambios que haya en el get de las notas y actualizar la screen
  //       // hacer el get de las notas al back
  //       // setnotes(notas);
  //     };

  //     get();
  //   }, []);

  return (
    <ScrollView>
      <Card>
        <Card.Title>{`${mentee.name} ${mentee.surname}`}</Card.Title>
        <Card.Divider />
        {data.map((u, i) => {
          return (
            <View key={i} style={styles.card}>
              <Text style={styles.title}>{u.title}</Text>
              <Text style={styles.note}>- {u.description}</Text>
              <Card.Divider />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Button
                  icon={<Icon name="edit" color="#ffffff" />}
                  buttonStyle={{ ...styles.btns, backgroundColor: mode.green }}
                  onPress={() => handleEdit()}
                />
                <Button
                  icon={<Icon name="delete" color="#ffffff" />}
                  buttonStyle={{ ...styles.btns, backgroundColor: mode.green }}
                  onPress={() => handleDelete()}
                />
                <Button
                  icon={<Icon name="add" color="#ffffff" />}
                  buttonStyle={{ ...styles.btns, backgroundColor: mode.green }}
                  onPress={() => handleAdd()}
                />
              </View>
            </View>
          );
        })}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    display: 'flex',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 15,
  },
  note: {
    fontSize: 17,
  },
  btns: {
    width: 100,
  },
});
