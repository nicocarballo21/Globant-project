import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

export default function ProfileNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Perfil"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: '#BFD732' }}
      drawerPosition="right"
      drawerType="back">
      <Drawer.Screen
        name="Perfil"
        component={ProfileStack}
        options={{ title: 'Mi Perfil' }}
      />
      {/* <Drawer.Screen name="Cancel Match" component={UserData} /> */}
    </Drawer.Navigator>
  );
}
