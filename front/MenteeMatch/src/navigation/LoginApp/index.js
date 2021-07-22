import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register, RoleSelection } from '../../screens';

const Stack = createStackNavigator();

export default function LoginApp() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode={'none'}>
      <Stack.Screen name="Login" component={RoleSelection} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
