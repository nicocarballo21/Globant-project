import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { UserDetails, Register, UserData } from '../../screens/'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Cerrar sesion"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
};

export default function SettingsDraw() {
    return (
        <Drawer.Navigator
            initialRouteName="UserDetails"
            drawerContent={props => <CustomDrawerContent {...props}/>}
            drawerContentOptions={{activeTintColor:"#BFD732"}}
        >
            <Drawer.Screen name="UserDetails" component={UserDetails} options={{title:"Mi perfil"}} />
            <Drawer.Screen name="EditProfile" component={Register} options={{title:"Editar perfil"}}/>
            <Drawer.Screen name="CancelMatch" component={UserData}/>
        </Drawer.Navigator>
    )
}
