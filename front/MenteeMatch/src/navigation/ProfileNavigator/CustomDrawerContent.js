import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { useDispatch } from 'react-redux';
import Switch from '../../components/Switch';
import { removeData } from '../../utils/storage';
import { setUser } from '../../redux/Reducers/UserReducer';
import { logout } from '../../redux/Slices/authSlice';

export default function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await removeData('user');
      dispatch(logout());
      dispatch(setUser({}));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar menú"
        onPress={() => props.navigation.closeDrawer()}
      /> 
      <DrawerItem label="Cerrar sesion" onPress={handleLogOut} />
      <Switch />
    </DrawerContentScrollView>
  );
}
