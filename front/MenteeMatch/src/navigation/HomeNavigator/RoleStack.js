import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RoleEdit, Skills } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function RoleStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Role" screenOptions={{
            headerTintColor: "#BFD732",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: "bold"
            }
      }}> 
      <Stack.Screen name="Role" component={RoleEdit} options={{
          title:"Opciones de Matcher",
              headerLeft: () => (
                  <Ionicons name="menu" size={40} color={"#BFD732"} onPress={() => navigation.openDrawer()} />
              )
      }}/>
      <Stack.Screen name="Skills" component={Skills} options={{
          title:"Habilidades",
      }}/>

    </Stack.Navigator>
  );
}
