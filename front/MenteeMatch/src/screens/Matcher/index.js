import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { UserBlock } from '../';
import { getMatches, setMatches } from '../../redux/Reducers/matchesReducer';
import { updateUser } from '../../redux/Reducers/UserReducer';
import { simpleMessage } from '../../utils';
import { Button } from '../../components';

import styles from './styles';
import useMode from '../../hooks/useMode';

export default function Matcher() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const matches = useSelector(state => state.matches);
  const roleToFind = user.actualRole ? `${user.actualRole.toLowerCase()}s` : ( user.isMentor ? 'mentees' : 'mentors' );
  const url = '/api/users/profile';
  const { mode } = useMode();

  // Seed inicial
  useEffect(() => {
    if (!matches.length) {
      dispatch(getMatches({ roleToFind, token: user.token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //-------------------------------------------------------------//
  // Sí el usuario cambia de mentor role a mentee role o visceversa

  useEffect(() => {
    dispatch(getMatches({ roleToFind, token: user.token }));
  }, [user.actualRole]);

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

  const handleReloadMatchs = () => {
    dispatch(updateUser({ url, data: { disLikes: [] } })).then(dispatched =>
      dispatch(getMatches({ roleToFind, token: user.token })),
    );
  };

  return (
    <>
      {matches.length || user.likes.length ? (
        <SafeAreaView style={{ ...styles.container, backgroundColor: mode.bg }}>
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
                    userLogin={user}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                    disableButtons={true}
                  />
                )}
              />
            </View>
          ) : null}
          {!user.likes.length && <View style={{ height: 120 }}></View>}
          {matches.length ? (
            <View style={styles.subContainer}>
              <Text style={{ ...styles.optionsTxt, color: mode.text }}>
                Estas son tus opciones
              </Text>
              <FlatList
                horizontal
                contentContainerStyle={styles.flatContent}
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
          ) : (
            <View
              style={{ ...styles.reloadMatchsBox, backgroundColor: mode.bg }}>
              <Text style={{ ...styles.reloadMatchsTxt, color: mode.text }}>
                ¡Oh!. Te has quedado sin opciones.
              </Text>
              <Text style={{ ...styles.reloadMatchsTxt, color: mode.text }}>
                ¿Quieres volver a recargar todos los perfiles?
              </Text>
              <Button
                title="Recargar"
                style={styles.reloadMatchsBtn}
                pressFunction={handleReloadMatchs}
              />
            </View>
          )}
        </SafeAreaView>
      ) : user.disLikes.length ? (
        <View
          style={{ ...styles.reloadAllDiscardedBox, backgroundColor: mode.bg }}>
          <Text style={{ ...styles.reloadMatchsTxt, color: mode.text }}>
            ¡Oh!. Te has quedado sin opciones.
          </Text>
          <Text style={{ ...styles.reloadMatchsTxt, color: mode.text }}>
            ¿Quieres volver a recargar todos los perfiles?
          </Text>
          <Button
            title="Recargar"
            style={styles.reloadMatchsBtn}
            pressFunction={handleReloadMatchs}
          />
        </View>
      ) : (
        <Text
          style={{
            ...styles.textCargStyle,
            backgroundColor: mode.bg,
            color: mode.text,
          }}>
          Cargando...
        </Text>
      )}
    </>
  );
}
