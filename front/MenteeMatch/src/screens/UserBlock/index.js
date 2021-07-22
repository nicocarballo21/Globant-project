import React from 'react';
import { Text, View, Image, Pressable, Button, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './styles';
import user_img from '../../assets/static/user_img.png';

export default function UserBlock({
  user,
  handleLike,
  handleDislike,
  disableButtons,
}) {
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
              {user.skillsToTeach.map(skill => (
                <Text key={skill._id}> {skill.name} •</Text>
              ))}
            </Text>
          </View>
          {!disableButtons && (
            <View style={styles.buttonsContainer}>
              <Button color="red" buttonStyles={styles.dislikeButton} title="Dislike" onPress={() => handleDislike(user)} />
              <Button color="green" buttonStyles={styles.likeButton} title="Like" onPress={() => handleLike(user)} />
            </View>
          )}
        </View>
      ) : (
        <Text style={{ textAlign: 'center' }}>...</Text>
      )}
    </View>
  );
}
