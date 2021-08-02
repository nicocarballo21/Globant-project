import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoleButton from '../../components/RoleButton';
import UserViewModel from '../../components/UserViewModel';

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
              style={{ marginLeft: 5 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <RoleButton
              style={{
                alignSelf: 'center',
                width: 140,
                height: 45.6,
                marginRight: 8,
                textAlignVertical: 'center',
                marginBottom: 20,
                elevation: 5,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="UserViewModel"
        component={UserViewModel}
        options={{
          title: 'Mentee',
        }}
      />
    </Stack.Navigator>
  );
}
