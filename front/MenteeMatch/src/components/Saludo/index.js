import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function HeaderTitle({ user, mode }) {
  return (
    <>
      <Text style={{ ...styles.title, color: mode.text }}>
        Hola, {user.name}.
      </Text>
      <Text style={{ ...styles.subtitle, color: mode.text }}>
        Elige entre tus posibles matches
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
  },
});
