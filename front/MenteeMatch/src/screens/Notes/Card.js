import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import useMode from '../../hooks/useMode';

export default function CardComponent({ mentee, notes }) {
  const { mode } = useMode();

  return (
    <ScrollView>
      <Card>
        <Card.Title>{`${mentee.name} ${mentee.surname}`}</Card.Title>
        <Card.Divider />
        {notes.map((u, i) => {
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
                />
                <Button
                  icon={<Icon name="delete" color="#ffffff" />}
                  buttonStyle={{ ...styles.btns, backgroundColor: mode.green }}
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
