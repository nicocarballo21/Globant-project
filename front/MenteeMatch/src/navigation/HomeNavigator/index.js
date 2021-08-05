import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import HomeStack from './HomeStack';
import useMode from '../../hooks/useMode';
import RoleStack from './RoleStack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  const { mode } = useMode();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: mode.bg,
        width: "60%",
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "center"
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: mode.green }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Home', drawerIcon: () => <Ionicons name="home" size={24} /> }}
      />
      <Drawer.Screen
        name="RoleEdit"
        component={RoleStack}
        options={{ title: 'Cambio de rol', drawerIcon: () => <Ionicons name="people" size={24} /> }}
      />
    </Drawer.Navigator>
  );
}
