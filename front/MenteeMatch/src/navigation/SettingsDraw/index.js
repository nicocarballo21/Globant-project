import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import Switch from '../../components/Switch';

import { UserDetails, Register, UserData } from '../../screens/';
import { removeData } from '../../utils/storage';
import { setUser } from '../../redux/Reducers/UserReducer';
import { logout } from '../../redux/Slices/authSlice';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await removeData('user');
      dispatch(setUser({}));
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem label="Cerrar sesion" onPress={handleLogOut} />
      <Switch />
    </DrawerContentScrollView>
  );
}

/* Para cerrar el drawer usar -> props.navigation.closeDrawer() */
/* Para togglear el drawer usar -> props.navigation.toggleDrawer() */

export default function SettingsDraw() {
  return (
    <Drawer.Navigator
      initialRouteName="UserDetails"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: '#BFD732' }}>
      <Drawer.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ title: 'Mi perfil' }}
      />
      <Drawer.Screen
        name="EditProfile"
        component={Register}
        options={{ title: 'Editar perfil' }}
      />
      <Drawer.Screen name="CancelMatch" component={UserData} />
    </Drawer.Navigator>
  );
}
