import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import useMode from '../../../hooks/useMode';
import styles from './styles';

const Information = ({ item }) => {
  const { mode } = useMode();
  const [data, setData] = React.useState({
    _id: { $oid: '610328b7afb38cd4d0c8e60c' },
    isMentor: true,
    isMentee: true,
    isAdmin: true,
    skillsToLearn: [
      { $oid: '610328b7afb38cd4d0c8e5da' },
      { $oid: '610328b7afb38cd4d0c8e5dd' },
      { $oid: '610328b7afb38cd4d0c8e5e0' },
      { $oid: '610328b7afb38cd4d0c8e5e3' },
      { $oid: '610328b7afb38cd4d0c8e5e5' },
    ],
    skillsToTeach: [
      { $oid: '610328b7afb38cd4d0c8e5d6' },
      { $oid: '610328b7afb38cd4d0c8e5d5' },
      { $oid: '610328b7afb38cd4d0c8e5d8' },
      { $oid: '610328b7afb38cd4d0c8e5d9' },
      { $oid: '610328b7afb38cd4d0c8e5da' },
    ],
    img: 'https://media.ambito.com/p/50e3edaf8166780a4e81f46424629664/adjuntos/239/imagenes/038/792/0038792140/1200x1200/smart/dogecoin-memejpg.jpg',
    mentees: [],
    meets: [],
    objectives: [],
    likes: [],
    disLikes: [],
    maxMentees: null,
    name: 'Pepe',
    surname: 'Scalan',
    email: 'elpepe@email.com',
    password: '$2a$10$nRItEP6l.KsnyhxwaDCy.OWNlHu/9rbIj/5.lRJEm4NDl7NEITvny',
    __v: { $numberInt: '0' },
  });

  const message = () => {
    if (item.type === 'confirmation') {
      return `${data.name} ${data.surname} ha aceptado tu solicitud como mentor, felicidades!!`;
    } else if (item.type === 'rechazo') {
      return `${data.name} ${data.surname} ha rechazado tu solicitud.`;
    } else if (item.type === 'asignacion') {
      return `${data.name} ${data.surname} te ha sido asignado como mentee.`;
    }
  };
  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: mode.inputBg,
      }}>
      <View style={styles.imgContainer}>
        <Image
          style={{ ...styles.img, borderColor: mode.violet }}
          source={{ uri: data.img }}
        />
      </View>
      <View style={styles.message}>
        <Text
          style={{
            color: mode.text,
          }}>
          {message()}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Icon name="check-circle" size={60} color={'#006606'} />
      </View>
    </View>
  );
};

export default Information;
