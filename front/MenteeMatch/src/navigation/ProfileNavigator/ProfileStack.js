import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetails } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Camera } from '../../components';
import RoleButton from '../../components/RoleButton';

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
          headerLeft: () => <RoleButton style={{
            alignSelf: "center",
            width: 100,
            height: 45.6,
            marginLeft: 16,
            textAlignVertical: "center",
            marginBottom: 20,
            elevation: 5,
          }} />
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
