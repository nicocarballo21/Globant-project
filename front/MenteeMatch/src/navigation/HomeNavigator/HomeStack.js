import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#BFD732' },
        headerTintColor: '#F5F6F7',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={40}
              color={'#F5F6F7'}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
