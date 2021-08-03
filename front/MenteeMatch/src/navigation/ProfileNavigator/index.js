import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import ProfileStack from './ProfileStack';
import useMode from '../../hooks/useMode';
import ProfileEditStack from './ProfileEditStack.js';
const Drawer = createDrawerNavigator();

export default function ProfileNavigator() {
  const { mode } = useMode();

  return (
    <Drawer.Navigator
      initialRouteName="Perfil"
      drawerStyle={{
        backgroundColor: mode.bg,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: '#BFD732' }}
      drawerPosition="right"
      drawerType="back">
      <Drawer.Screen
        name="Perfil"
        component={ProfileStack}
        options={{ title: 'Mi Perfil' }}
      />
      <Drawer.Screen
        name="ProfileEdit"
        component={ProfileEditStack}
        options={{ title: 'Editar perfil' }}
      />
    </Drawer.Navigator>
  );
}
