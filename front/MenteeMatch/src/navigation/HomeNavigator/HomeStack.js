import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerTintColor: "#BFD732",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: "bold"
            }
      }}> 
      <Stack.Screen name="Home" component={Home} options={{
          title:"Home",
              headerLeft: () => (
                  <Ionicons name="menu" size={40} color={"#BFD732"} onPress={() => navigation.openDrawer()} />
              )
      }}/>
    </Stack.Navigator>
  );
}


