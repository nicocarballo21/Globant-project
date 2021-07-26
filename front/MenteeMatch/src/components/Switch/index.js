import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

export default function () {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo oscuro</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor={isEnabled ? '#BFD732' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switch: {
    marginTop: 20,
    marginRight: 20,
  },
  title: {
    color: 'grey',
    marginTop: 20,
    marginLeft: 20,
  },
});
