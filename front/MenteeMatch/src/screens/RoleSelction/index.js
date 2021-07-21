import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RoleSelection = () => {

  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.option}
        title={'w'}
        onPress={'e'}>
        <Text style={styles.buttonText}>{'title'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.option}
        title={'title'}
        onPress={'pressFunction'}>
        <Text style={styles.buttonText}>{'title'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'cadetblue',
  },
});

export default RoleSelection;
