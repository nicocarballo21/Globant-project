import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Pressable, SafeAreaView, FlatList } from 'react-native';
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
    const token = user.token;
    dispatch(getMatches({ roleToFind, token }));
  }, []);

  const handleLike = likedUser => {
    const finalMatch = user.likes.find(userPrevLiked => userPrevLiked._id === likedUser._id,);
    if (finalMatch) {
      simpleMessage('Información', `El mentor ${finalMatch.name} ${finalMatch.surname} te ha sido asignado`, 'info');
      return dispatch(setUser({ ...user, mentor: finalMatch }));
    }
    const orderedMatches = matches.filter(match => match._id !== likedUser._id)
    orderedMatches.push(likedUser)
    dispatch(setUser({ ...user, likes: [...user.likes, likedUser] }));
    dispatch(setMatches(orderedMatches))
  };

  const handleDislike = dislikedUser => {
    dispatch(setUser({ ...user, disLikes: [...user.disLikes, dislikedUser] }));
    const filteredMatches = matches.filter(
      match => match._id !== dislikedUser._id,
    );
    dispatch(setMatches(filteredMatches));
  };

  return (
    <View style={styles.container}>
      {matches.length ? (
        <SafeAreaView>
          <Text style={styles.title}>Hola, {user.name}.</Text>
          <Text style={styles.subtitle}>Elije entre tus posibles matches:</Text>
          {user.likes.length ? (
            <UserBlock
              user={user.likes[user.likes.length - 1]}
              handleLike={handleLike}
              handleDislike={handleDislike}
              disableButtons={true}
            />
          ) : null}
          <FlatList
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 6,
            }}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={matches}
            keyExtractor={matches => matches._id}
            renderItem={({ item }) => (
              <UserBlock
                user={item}
                handleLike={handleLike}
                handleDislike={handleDislike}
                disableButtons={false}
              />
            )}
          />
        </SafeAreaView>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
}
