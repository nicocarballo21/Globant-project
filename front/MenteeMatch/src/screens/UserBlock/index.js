import React from 'react';
import { Text, View, Image, Pressable, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './styles';
import user_img from '../../assets/static/user_img.png';

export default function UserBlock({
  user,
  handleLike,
  handleDislike,
  disableButtons,
}) {

    const skills = user.isMentee ? user.skillsToLearn : user.skillsToTeach

  return (
    <View style={styles.container}>
      {user._id ? (
        <View style={styles.block}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.img}
              source={user.img ? { uri: user.img } : user_img}
            />
            <View>
              <Text style={styles.title}>
                {user.name} {user.surname}
              </Text>
              <Text style={styles.text}>{user.email}</Text>
            </View>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skills}>
              {skills.map(skill => (
                <Text key={skill._id}> {skill.name} •</Text>
              ))}
            </Text>
          </View>
          {!disableButtons && (
            <View style={styles.buttonsContainer}>
              <Button buttonStyle={styles.dislikeButton} title="Rechazar" onPress={() => handleDislike(user)} />
              <Button buttonStyle={styles.likeButton} title="Aceptar" onPress={() => handleLike(user)} />
            </View>
          )}
        </View>
      ) : (
        <Text style={{ textAlign: 'center', fontSize: 30 }}>...</Text>
      )}
    </View>
  );
}

