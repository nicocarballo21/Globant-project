import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RoleEdit, Skills } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useMode from '../../hooks/useMode';

const Stack = createStackNavigator();

export default function RoleStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Role"
      screenOptions={{
        headerStyle: { backgroundColor: '#BFD732' },
        headerTintColor: '#F5F6F7',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Role"
        component={RoleEdit}
        options={{
          title: 'Opciones de Matcher',
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
      <Stack.Screen
        name="Skills"
        component={Skills}
        options={{
          title: 'Habilidades',
        }}
      />
    </Stack.Navigator>
  );
}
