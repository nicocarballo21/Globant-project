import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { globantBright } from '../../assets/styles/colors';

export default ({ mentorSkills, userLogin }) => {
  const userSkillsToLearn = userLogin.skillsToLearn;
  const value = (mentorSkills.coincidences * 100) / userSkillsToLearn.length;

  return (
    <CircularProgress
      value={value}
      radius={30}
      textColor={globantBright.text}
      activeStrokeColor={globantBright.green}
      inActiveStrokeColor={globantBright.text}
      inActiveStrokeOpacity={0.2}
      valueSuffix={'%'}
      inActiveStrokeWidth={10}
      activeStrokeWidth={10}
    />
  );
};
