import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { pullMeets, removeMeet } from '../../redux/Reducers/UserReducer';
import useMode from '../../hooks/useMode';
import styles from './styles';

const Meets = ({ navigation, route }) => {
  const { mode } = useMode();
  const dispatch = useDispatch();
  console.log("ROUTE: ", route)
  const mentee = route.params && route.params.mentee;
  const token = useSelector(state => state.user.token);
  const { meets } = mentee && mentee.meets.length ? mentee : useSelector(state => state.user);

  const handleDelete = async meet => {
    const data = { _id: meet._id, token: token };
     dispatch(removeMeet(data)).then((deleted) => {
       console.log(deleted)
       dispatch(pullMeets(token))
     })
  };

  useEffect(() => {
    dispatch(pullMeets(token));
  }, []);

  return (
    <View style={{ ...styles.container, backgroundColor: mode.bg }}>
      <ScrollView
        contentContainerStyle={{ ...styles.scroll, backgroundColor: mode.bg }}>
        <Text style={{ ...styles.title, color: mode.text }}>Reuniones</Text>
        {meets && meets.length ? (
          meets.map((meet, i) => (
            <View key={i} style={{ ...styles.module, color: mode.text }}>
              <Text style={styles.meetTitle}>{meet.title}</Text>
              <Text style={styles.description}>{meet.description}</Text>
              <Text style={styles.date}>{meet.date}</Text>
              <Button
                style={styles.deleteBtn}
                title="Eliminar"
                pressFunction={() => handleDelete(meet)}
              />
            </View>
          ))
        ) : (
          <Text style={{ ...styles.not, color: mode.text }}>
            No tienes reuniones agendadas.
          </Text>
        )}
        <Button
          style={styles.new}
          title="Nueva reunión"
          pressFunction={() => navigation.navigate('CreateMeet')}
        />
      </ScrollView>
    </View>
  );
};

export default Meets;
