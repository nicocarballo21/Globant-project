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
import {
  setMenteeToMentor,
  setMentorToMentee,
} from '../../services/axiosServices';

export default function Matcher() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const matches = useSelector(state => state.matches);
  const getRoleToFind = () => {
    if (!user.actualRole) {
      return user.isMentor ? 'mentees' : 'mentors';
    }
    return user.actualRole === 'Mentor' ? 'mentees' : 'mentors';
  };
  const roleToFind = getRoleToFind();
  const url = '/api/users/profile';
  const { mode } = useMode();
  const likedRole = roleToFind === 'mentors' ? 'likedMentors' : 'likedMentees';
  const dislikedRole =
    likedRole === 'likedMentees' ? 'dislikedMentees' : 'dislikedMentors';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.actualRole]);

  const handleLike = likedUser => {
    const finalMatch = user[likedRole].find(
      userPrevLiked => userPrevLiked._id === likedUser._id,
    );
    if (finalMatch) {
      if (roleToFind === 'mentees') {
        // Acá se debería enviar la notificación al mentee pero por ahora directamente se asigna directamente a ese mentee como propio del mentor
        if (user.mentees.length >= user.maxMentees) {
          return simpleMessage(
            '¡Atención!',
            `Puedes tener hasta ${user.maxMentees} mentees cómo máximo al mismo tiempo`,
            'warning',
          );
        }
        return setMentorToMentee(user._id, finalMatch._id, user.token).then(
          setted => {
            if (!setted) {
              return dispatch(updateUser({ url, data: {} }));
            }
            dispatch(
              updateUser({
                url,
                data: { mentees: [...user.mentees, finalMatch._id] },
              }),
            );
            simpleMessage(
              'Información',
              `${finalMatch.name} ${
                finalMatch.surname
              } es tu nuevo ${roleToFind.replace('s', '')}`,
              'info',
            );
          },
        );
      } else {
        return setMenteeToMentor(user._id, finalMatch._id, user.token).then(
          setted => {
            if (!setted) {
              simpleMessage(
                '¡Error!',
                'El usuario ya no está disponible.',
                'danger',
              );
              return dispatch(updateUser({ url, data: {} }));
            }
            dispatch(updateUser({ url, data: { mentor: finalMatch._id } }));
            simpleMessage(
              'Información',
              `${finalMatch.name} ${
                finalMatch.surname
              } es tu nuevo ${roleToFind.replace('s', '')}`,
              'info',
            );
          },
        );
      }
    }
    const orderedMatches = matches.filter(match => match._id !== likedUser._id);
    dispatch(
      updateUser({
        url,
        data: { [likedRole]: [likedUser, ...user[likedRole]] },
      }),
    );
    dispatch(setMatches(orderedMatches));
  };

  const handleDislike = dislikedUser => {
    dispatch(
      updateUser({
        url,
        data: { [dislikedRole]: [...user[dislikedRole], dislikedUser] },
      }),
    );
    const hasLikedThatOne = user[likedRole].find(
      likedUser => likedUser._id === dislikedUser._id,
    );
    if (hasLikedThatOne) {
      const filteredLikes = user[likedRole].filter(
        likedUser => likedUser._id !== dislikedUser._id,
      );
      dispatch(updateUser({ url, data: { [likedRole]: filteredLikes } }));
    }

    const filteredMatches = matches.filter(
      match => match._id !== dislikedUser._id,
    );
    dispatch(setMatches(filteredMatches));
  };

  const handleReloadMatchs = () => {
    dispatch(updateUser({ url, data: { [dislikedRole]: [] } })).then(
      dispatched => dispatch(getMatches({ roleToFind, token: user.token })),
    );
  };

  if (user.actualRole === 'Mentee' && user.mentor) {
    return (
      <View>
        <Text>
          Ya tienes un mentor asignado, puedes encontrarlo en la vista Home
        </Text>
      </View>
    );
  }

  return (
    <>
      {matches.length || user[likedRole].length ? (
        <SafeAreaView style={{ ...styles.container, backgroundColor: mode.bg }}>
          {user[likedRole].length ? (
            <View style={styles.subContainer_1}>
              <FlatList
                horizontal
                contentContainerStyle={{}}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={user[likedRole]}
                keyExtractor={(match, index) => match._id + index}
                renderItem={({ item }) => (
                  <UserBlock
                    enableTooltip={user[likedRole].length === 1}
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
          {!user[likedRole].length && <View style={{ height: 120 }}></View>}
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
      ) : user[dislikedRole].length ? (
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
