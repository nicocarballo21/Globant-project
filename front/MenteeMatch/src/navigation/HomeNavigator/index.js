import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent'
import HomeStack from './HomeStack'
//import { RoleEdit } from '../../screens';
import RoleStack from './RoleStack'

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: '#BFD732' }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="RoleEdit"
        component={RoleStack}
        options={{ title: 'Opciones matcher' }}
      />
    </Drawer.Navigator>
  );
}
