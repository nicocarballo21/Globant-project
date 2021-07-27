import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Matcher } from '../../screens/';
import { useSelector } from 'react-redux';
import ProfileNavigator from '../ProfileNavigator';
import HomeNavigator from '../HomeNavigator';

import { globantBright, globantDark } from '../../assets/styles/colors';

const Tab = createBottomTabNavigator();

export default function HomeApp() {
  const { theme } = useSelector(state => state);
  const mode = theme === 'ligth' ? globantBright : globantDark;
  const user = useSelector(state => state.user);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: { backgroundColor: mode.green },
        activeTintColor: mode.text,
        inactiveTintColor: mode.bg,
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
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileNavigator}
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
