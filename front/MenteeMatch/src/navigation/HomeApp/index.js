import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Matcher } from '../../screens/';
import { SettingsDraw } from '../';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function HomeApp() {
  const user = useSelector(state => state.user);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#BFD732',
        inactiveTintColor: '#666666',
        showLabel: true,
      }}>
      {!user.mentor && (
        <Tab.Screen
          name="Matcher"
          component={Matcher}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle" size={size} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={SettingsDraw}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
