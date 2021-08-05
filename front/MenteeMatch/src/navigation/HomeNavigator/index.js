import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import HomeStack from './HomeStack';
import useMode from '../../hooks/useMode';
import RoleStack from './RoleStack';

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  const { mode } = useMode();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: mode.bg,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: mode.green }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="RoleEdit"
        component={RoleStack}
        options={{ title: 'Cambio de rol' }}
      />
    </Drawer.Navigator>
  );
}
