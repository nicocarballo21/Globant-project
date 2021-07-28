import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { UserBlock } from '../';
import { getMatches, setMatches } from '../../redux/Reducers/matchesReducer';
import { updateUser } from '../../redux/Reducers/UserReducer';
import { simpleMessage } from '../../utils';

import styles from './styles';
import useMode from '../../hooks/useMode';

export default function Matcher() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const matches = useSelector(state => state.matches);
  const roleToFind = user.isMentee ? 'mentors' : 'mentees';
  const url = '/api/users/profile';
  const { mode } = useMode();

  // console.log(user.skillsToLearn.length);

  // Seed inicial
  useEffect(() => {
    if (!matches.length) {
      dispatch(getMatches({ roleToFind, token: user.token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //-------------------------------------------------------------//
  /* useEffect(() => {
    if (user.likes.length || user.disLikes.length) {
      const coincidencesToFind = [...user.likes, ...user.disLikes];
      const filteredMatches = matches.filter(({ _id }) => {
        const truthArr = coincidencesToFind.map(
          coincidence => coincidence._id === _id,
        );
        return !truthArr.includes(true);
      });
      dispatch(setMatches(filteredMatches));
    }
  }, [matches.length]); */

  const handleLike = likedUser => {
    const finalMatch = user.likes.find(
      userPrevLiked => userPrevLiked._id === likedUser._id,
    );
    if (finalMatch) {
      simpleMessage(
        'Información',
        `${finalMatch.name} ${finalMatch.surname} es tu nuevo mentor`,
        'info',
      );
      return dispatch(updateUser({ url, data: { mentor: finalMatch._id } }));
    }
    const orderedMatches = matches.filter(match => match._id !== likedUser._id);
    /* orderedMatches.push(likedUser) */
    dispatch(updateUser({ url, data: { likes: [likedUser, ...user.likes] } }));
    dispatch(setMatches(orderedMatches));
  };

  const handleDislike = dislikedUser => {
    dispatch(
      updateUser({ url, data: { disLikes: [...user.disLikes, dislikedUser] } }),
    );
    const hasLikedThatOne = user.likes.find(
      likedUser => likedUser._id === dislikedUser._id,
    );
    if (hasLikedThatOne) {
      const filteredLikes = user.likes.filter(
        likedUser => likedUser._id !== dislikedUser._id,
      );
      dispatch(updateUser({ url, data: { likes: filteredLikes } }));
    }

    const filteredMatches = matches.filter(
      match => match._id !== dislikedUser._id,
    );
    dispatch(setMatches(filteredMatches));
  };

  return (
    <>
      {matches.length ? (
        <SafeAreaView style={{ ...styles.container, backgroundColor: mode.bg }}>
          {/* <View
            style={
              user.likes
                ? {
                    ...styles.titleBox_like,
                    backgroundColor: mode.green,
                  }
                : { ...styles.title, color: mode.text }
            }>
            <Text style={{ ...styles.title, color: mode.text }}>
              Hola, {user.name}.
            </Text>
            <Text style={{ ...styles.subtitle, color: mode.text }}>
              Elige entre tus posibles matches
            </Text>
          </View> */}

          {user.likes.length ? (
            <View style={styles.subContainer_1}>
              <FlatList
                horizontal
                contentContainerStyle={{}}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={user.likes}
                keyExtractor={(match, index) => match._id + index}
                renderItem={({ item }) => (
                  <UserBlock
                    user={item}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                    disableButtons={true}
                  />
                )}
              />
            </View>
          ) : null}

          <View style={styles.subContainer}>
            <FlatList
              horizontal={user.likes.length ? true : false}
              contentContainerStyle={styles.flatAlign}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={matches}
              keyExtractor={(match, index) => match._id + index}
              renderItem={({ item }) => (
                <UserBlock
                  user={item}
                  userLogin={user}
                  handleLike={handleLike}
                  handleDislike={handleDislike}
                  disableButtons={false}
                />
              )}
            />
          </View>
        </SafeAreaView>
      ) : (
        <Text style={styles.textCargStyle}>Cargando...</Text>
      )}
    </>
  );
}
