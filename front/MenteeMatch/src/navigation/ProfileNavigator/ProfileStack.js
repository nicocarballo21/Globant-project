import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetails } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Camera } from '../../components';

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#BFD732' },
        headerTintColor: '#F5F6F7',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={UserDetails}
        options={{
          title: 'Mi Perfil',
          headerRight: () => (
            <Ionicons
              name="settings"
              size={30}
              color={'#F5F6F7'}
              style={{ marginRight: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ title: 'Camara' }}
      />
    </Stack.Navigator>
  );
}
