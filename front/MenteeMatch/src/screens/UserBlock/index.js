import React, { useEffect } from 'react';
import { Text, View, Image, Pressable, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './styles';
import user_img from '../../assets/static/user_img.png';
import SpinnerCoincidence from '../../components/SpinnerCoincidence';
import { useSelector } from 'react-redux';

export default function UserBlock({
  user,
  userLogin,
  handleLike,
  handleDislike,
  disableButtons,
}) {
  const skills = user.isMentor ? user.skillsToTeach : user.skillsToLearn;

  return (
    <View style={styles.container}>
      {user._id ? (
        <View style={styles.block}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.img}
              source={user.img ? { uri: user.img } : user_img}
            />
            <View style={styles.cardTitleBox}>
              <View>
                <Text style={styles.title}>
                  {user.name} {user.surname}
                </Text>
                <Text style={styles.text}>{user.email}</Text>
              </View>
            </View>
            {disableButtons && (
              <Button
                buttonStyle={[styles.likeButton, styles.confirmButton]}
                title="✔"
                onPress={() => handleLike(user)}
              />
            )}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.skills}>
              •
              {skills.map(skill => (
                <Text key={skill._id}> {skill.name} •</Text>
              ))}
            </Text>
          </View>

          {!disableButtons && (
            <View style={styles.buttonsContainer}>
              <Button
                buttonStyle={styles.dislikeButton}
                title="Descartar"
                onPress={() => handleDislike(user)}
              />

              <View style={styles.spinnerContainer}>
                <SpinnerCoincidence mentorSkills={user} userLogin={userLogin} />
                <Text>Coincidencias</Text>
              </View>

              <Button
                buttonStyle={styles.likeButton}
                title="Elegir"
                onPress={() => handleLike(user)}
              />
            </View>
          )}
        </View>
      ) : (
        <Text style={{ textAlign: 'center', fontSize: 30 }}>...</Text>
      )}
    </View>
  );
}
