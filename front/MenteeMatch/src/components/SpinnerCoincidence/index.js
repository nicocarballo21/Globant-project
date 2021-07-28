import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import useMode from '../../hooks/useMode';

export default ({ mentorSkills, userLogin }) => {
  const userSkillsToLearn = userLogin.skillsToLearn;
  const value = (mentorSkills.coincidences * 100) / userSkillsToLearn.length;
  const { mode } = useMode();
  return (
    <CircularProgress
      value={value}
      radius={30}
      textColor={mode.text}
      activeStrokeColor={mode.green}
      inActiveStrokeColor={mode.text}
      inActiveStrokeOpacity={0.2}
      valueSuffix={'%'}
      inActiveStrokeWidth={10}
      activeStrokeWidth={10}
    />
  );
};
