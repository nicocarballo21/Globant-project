import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import ProfileNavigator from '../ProfileNavigator';
import HomeNavigator from '../HomeNavigator';
import MatcherNavigator from '../HomeNavigator/MatchNav';

import Objectives from '../../screens/Objectives';

import useMode from '../../hooks/useMode';

const Tab = createBottomTabNavigator();

export default function HomeApp() {
  const { mode } = useMode();
  const user = useSelector(state => state.user);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: { backgroundColor: mode.green },
        activeTintColor: mode.lightgray,
        inactiveTintColor: mode.blackPearl,
        showLabel: true,
      }}>
      {!user.mentor && (
        <Tab.Screen
          name="Matcher"
          component={MatcherNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle" size={size} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Home"
        component={Objectives}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ), // cambiar el componente a HomeNavigator
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
