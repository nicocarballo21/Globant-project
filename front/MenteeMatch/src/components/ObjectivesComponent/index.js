import React, { useState } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import useMode from '../../hooks/useMode';
import InputText from '../InputText';
import Button from '../Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({ objetive, mode, state }) => {
  return (
    <View style={{ ...styles.item, backgroundColor: mode.inputBg }}>
      <View style={styles.container}>
        <Text style={{ ...styles.title, color: mode.text }}>
          Estado: {state}
        </Text>
        <Text style={{ ...styles.title, color: mode.text }}>- {objetive}</Text>

        <View
          style={{
            borderBottomColor: mode.text,
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />

        <View style={styles.btns_container}>
          <Button
            icon={
              <Ionicons name="pencil-outline" size={30} color={mode.text} />
            }
            style={styles.btn}
          />
          <Button
            icon={<Ionicons name="trash-outline" size={30} color={mode.text} />}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
};

const ObjectivesComponent = ({ data, handleAdd }) => {
  const [input, setinput] = useState('');
  const { mode } = useMode();

  const renderItem = ({ item }) => (
    <Item objetive={item.description} state={item.state} mode={mode} />
  );
  return (
    <ScrollView>
      <View style={{ ...styles.container, backgroundColor: mode.bg }}>
        <View style={{ ...styles.header, backgroundColor: mode.green }}>
          <Text style={{ ...styles.title }}>Objetivos de: USER</Text>
        </View>

        <View style={styles.add_objectives}>
          <InputText
            onChangeText={setinput}
            value={input}
            placeholder="Ingresar objetivo a cumplir"
          />

          <Button
            title={'Agregar'}
            pressFunction={() => handleAdd(input, menteeId)}
          />
        </View>

        <View style={{ ...styles.content, backgroundColor: mode.bg }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ObjectivesComponent;
