import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetails } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Profile" screenOptions={{
            headerTintColor: "#BFD732",
              headerTitleAlign: "center",
              headerTitleStyle: {
                  fontWeight: "bold"
              }
      }}> 
      <Stack.Screen name="Profile" component={UserDetails} options={{
          title:"Mi Perfil",
              headerRight: () => (
                  <Ionicons name="settings" size={35} color={"#BFD732"} onPress={() => navigation.openDrawer()} />
              )
      }}/>
    </Stack.Navigator>
  );
}

