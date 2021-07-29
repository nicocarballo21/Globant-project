import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import useMode from '../../hooks/useMode';
import styles from './styles';

export default () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const now = new Date();
  const hour = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  const user = useSelector(state => state.user);
  const { mentor } = user;
  const { mode } = useMode();

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.user_data_container,
          backgroundColor: mode.bg,
        }}>
        <Text style={styles.text}>Mentor</Text>
        <Image source={{ uri: mentor.img }} style={styles.foto} />
        <Text style={styles.text}>{`${mentor.name} ${mentor.surname}`}</Text>
      </View>
      <View
        style={{
          ...styles.recuadro_container,
          backgroundColor: mode.bg,
        }}>
        <View style={styles.container_interno}>
          <View
            style={{
              ...styles.recuadro_interno,
              backgroundColor: mode.green,
            }}>
            <ScrollView style={{ margin: 9 }}>
              <Text>Objetivos</Text>
              <View style={styles.rowView}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={styles.inScrollViewText}>
                  Aprender React-Native
                </Text>
              </View>
              <View style={styles.rowView}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox1}
                  onValueChange={newValue => setToggleCheckBox1(newValue)}
                />
                <Text style={styles.inScrollViewText}>
                  Consolidar React-Redux
                </Text>
              </View>
              <View style={styles.rowView}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox2}
                  onValueChange={newValue => setToggleCheckBox2(newValue)}
                />
                <Text style={styles.inScrollViewText}>Consolidar express</Text>
              </View>
              <View style={styles.rowView}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox3}
                  onValueChange={newValue => setToggleCheckBox3(newValue)}
                />
                <Text style={styles.inScrollViewText}>Consolidar node</Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              ...styles.recuadro_interno2,
              backgroundColor: mode.green,
            }}>
            <ScrollView style={{ margin: 9 }}>
              <Text>Reuniones Programadas</Text>
              <View>
                <View style={styles.inScrollViewDate}>
                  <Text>{date} ---- </Text>
                  <Text>{hour}</Text>
                </View>
                <View style={styles.inScrollViewObjetive}>
                  <Text style={styles.inScrollViewText}>Reunion 1</Text>
                </View>
                <View style={styles.inScrollViewDate}>
                  <Text>{date} ---- </Text>
                  <Text>{hour}</Text>
                </View>
                <View style={styles.inScrollViewObjetive}>
                  <Text style={styles.inScrollViewText}>Reunion 2</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};
