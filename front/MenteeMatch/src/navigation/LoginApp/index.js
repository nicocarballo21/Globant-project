import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register, RoleSelection, SelectSkills } from '../../screens';
import { FirstScreen, PersonalInformation } from '../../components';

const Stack = createStackNavigator();

export default function LoginApp() {
  return (
    <Stack.Navigator initialRouteName="FirstScreen" headerMode={'none'}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="RoleSelection" component={RoleSelection} />
      <Stack.Screen name="SelectSkills" component={SelectSkills} />
    </Stack.Navigator>
  );
}
