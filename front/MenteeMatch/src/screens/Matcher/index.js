import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import { UserBlock } from '../';
import { getMatches, setMatches } from '../../redux/Reducers/matchesReducer';
import { setUser, updateUser } from '../../redux/Reducers/UserReducer';
import { simpleMessage } from '../../utils';

export default function Matcher() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const matches = useSelector(state => state.matches);
  const roleToFind = user.isMentee ? 'mentors' : 'mentees';
  const url = '/api/users/profile'

  // Seed inicial
  useEffect(() => {
    if(!matches.length)
      dispatch(getMatches({ roleToFind, token: user.token }));
  }, [dispatch]);

  //-------------------------------------------------------------//
  useEffect(() => {
    if(user.likes.length || user.disLikes.length) {
      const coincidencesToFind = [...user.likes, ...user.disLikes]
      const filteredMatches = matches.filter(({_id}) => {
        const truthArr = coincidencesToFind.map(coincidence => coincidence._id === _id)
        return !truthArr.includes(true) 
      })
      dispatch(setMatches(filteredMatches))
    }
  }, [matches.length])  

  const handleLike = likedUser => {
    const finalMatch = user.likes.find(userPrevLiked => userPrevLiked._id === likedUser._id);
    if (finalMatch) {
      simpleMessage('Información', `${finalMatch.name} ${finalMatch.surname} es tu nuevo mentor`, 'info');
      return dispatch(updateUser({url, data: { mentor: finalMatch._id }}));
    }
    const orderedMatches = matches.filter(match => match._id !== likedUser._id)
    /* orderedMatches.push(likedUser) */
    dispatch(updateUser({url, data: { likes: [likedUser, ...user.likes] }}));
    dispatch(setMatches(orderedMatches))
  };

  const handleDislike = dislikedUser => {
    dispatch(updateUser({url, data: { disLikes: [...user.disLikes, dislikedUser] }}));
    const hasLikedThatOne = user.likes.find(likedUser => likedUser._id === dislikedUser._id)
    if(hasLikedThatOne) {
      const filteredLikes = user.likes.filter(likedUser => likedUser._id !== dislikedUser._id)
      dispatch(updateUser({url, data: { likes: filteredLikes }}))
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
            <Text style={styles.subtitle}>Elige entre tus posibles matches:</Text>
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
        <Text style={{textAlign: "center", height:"100%", textAlignVertical:"center", fontSize: 30}}>Cargando...</Text>
      )}
    </>
  );
}
