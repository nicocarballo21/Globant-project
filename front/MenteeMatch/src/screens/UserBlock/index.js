import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './styles';
import user_img from '../../assets/static/user_img.png';
import SpinnerCoincidence from '../../components/SpinnerCoincidence';
import useMode from '../../hooks/useMode';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';

export default function UserBlock({
  user,
  userLogin,
  handleLike,
  handleDislike,
  disableButtons,
}) {
  const skills = user.isMentor ? user.skillsToTeach : user.skillsToLearn;
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const { mode } = useMode();
  return (
    <View style={styles.container}>
      {user._id ? (
        <View
          style={{
            ...styles.block,
            backgroundColor: mode.inputBg,
            borderColor: mode.inputBg,
          }}>
          <View style={styles.rowDirection}>
            <Image
              style={{ ...styles.img, borderColor: mode.violet }}
              source={user.img ? { uri: user.img } : user_img}
            />
            <View style={styles.cardTitleBox}>
              <View>
                <Text
                  style={{
                    ...styles.title,
                    color: mode.violet,
                  }}>
                  {user.name} {user.surname}
                </Text>
                <Text style={{ ...styles.text, color: mode.text }}>
                  {user.email}
                </Text>
              </View>
            </View>
            {disableButtons && (
              <>
                <Button
                  buttonStyle={[styles.likeButton, styles.confirmButton]}
                  title="Confirmar ✔"
                  onPress={() => handleOpen()}
                />
                <SCLAlert
                  show={show}
                  onRequestClose={handleClose}
                  theme="inverse"
                  title="¡Atención!"
                  subtitle={`¿Quieres confirmar a ${user.name} ${user.surname} cómo tu mentor?`}>
                  <SCLAlertButton theme="info" onPress={handleClose}>
                    Confirmar
                  </SCLAlertButton>
                  <SCLAlertButton theme="default" onPress={handleClose}>
                    Cancelar
                  </SCLAlertButton>
                </SCLAlert>
              </>
            )}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={{ ...styles.skills, color: mode.text }}>
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
                <Text style={{ color: mode.text }}>Coincidencias</Text>
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
        <Text
          style={{
            ...styles.textCargando,
            color: mode.text,
          }}>
          ...
        </Text>
      )}
    </View>
  );
}
