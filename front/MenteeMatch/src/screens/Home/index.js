import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import HomeView from '../../components/HomeView';

const Home = () => {
  const user = useSelector(state => state.user);
  return user.mentor ? (
    <>
      <HomeView />
    </>
  ) : (
    <Text style={styles.text}>No tienes mentor asignado.</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
  },
});
export default Home;

// const Home = () => {
//   const user = useSelector(state => state.user);
//   return user.isMentor ? user.mentees ? (
//     <View>
//       <HomeView/>
//     </View>
//   ) : (
//     <Text
//       style={{
//         fontSize: 25,
//         textAlign: 'center',
//         height: '100%',
//         textAlignVertical: 'center',
//       }}>
//        No tienes mentees asignados.
//     </Text>
//   )
//   :
//   user.mentor ? (
//     <View>
//       <HomeView/>
//     </View>
//   ) : (
//     <Text
//       style={{
//         fontSize: 25,
//         textAlign: 'center',
//         height: '100%',
//         textAlignVertical: 'center',
//       }}>
//        No tienes mentor asignado.
//     </Text>
//   )
// };

// export default Home;
