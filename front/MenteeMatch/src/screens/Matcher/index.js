import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import { UserBlock } from '../';
import { getMatches, setMatches } from '../../redux/Reducers/matchesReducer';
import { setUser } from '../../redux/Reducers/UserReducer';
import { simpleMessage } from '../../utils';

export default function Matcher() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const matches = useSelector(state => state.matches);
  const roleToFind = user.isMentee ? 'mentors' : 'mentees';

  // Seed inicial
  useEffect(() => {
    dispatch(getMatches({ roleToFind, token: user.token }));
  }, []);

  // Si se queda sin candidatos, hago de nuevo el pedido
  if(!matches.length)
    dispatch(getMatches({ roleToFind, token: user.token }))
  

  const handleLike = likedUser => {
    const finalMatch = user.likes.find(userPrevLiked => userPrevLiked._id === likedUser._id,);
    if (finalMatch) {
      simpleMessage('Información', `El mentor ${finalMatch.name} ${finalMatch.surname} te ha sido asignado`, 'info');
      return dispatch(setUser({ ...user, mentor: finalMatch }));
    }
    const orderedMatches = matches.filter(match => match._id !== likedUser._id)
    orderedMatches.push(likedUser)
    dispatch(setUser({ ...user, likes: [likedUser, ...user.likes] }));
    dispatch(setMatches(orderedMatches))
  };

  const handleDislike = dislikedUser => {
    dispatch(setUser({ ...user, disLikes: [...user.disLikes, dislikedUser] }));
    const hasLikedThatOne = user.likes.find(likedUser => likedUser._id === dislikedUser._id)
    if(hasLikedThatOne) {
      const filteredLikes = user.likes.filter(likedUser => likedUser._id !== dislikedUser._id)
      dispatch(setUser({...user, likes: filteredLikes}))
    }
      

    const filteredMatches = matches.filter(
      match => match._id !== dislikedUser._id,
    );
    dispatch(setMatches(filteredMatches));
  };

  return (
      <>
      {matches.length ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Hola, {user.name}.</Text>
            <Text style={styles.subtitle}>Elije entre tus posibles matches:</Text>
          </View>
          {user.likes.length ? (
            <>
              <Text style={styles.optionsTxt}>Estos son tus likes</Text>
              <FlatList
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 6,
              }}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={user.likes}
              keyExtractor={(matches, index) => matches._id + index}
              renderItem={({ item }) => (
                <UserBlock
                  user={item}
                  handleLike={handleLike}
                  handleDislike={handleDislike}
                  disableButtons={true}
                />
              )}
            />
          </>
          ) : null}
          {!user.likes.length && <View style={{ height: 120 }}></View>}
          <View style={styles.subContainer}>
            <Text style={styles.optionsTxt}>Estas son tus opciones</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                height: 350,
                paddingHorizontal: 6
              }}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={matches}
              keyExtractor={(matches, index) => matches._id + index}
              renderItem={({ item }) => (
                <UserBlock
                  user={item}
                  handleLike={handleLike}
                  handleDislike={handleDislike}
                  disableButtons={false}
                />
              )}
            />
          </View>
        </SafeAreaView>
      ) : (
        <Text style={{textAlign: "center", height:"100%", textAlignVertical:"center", fontSize: 45}}>Cargando...</Text>
      )}
    </>
  );
}
