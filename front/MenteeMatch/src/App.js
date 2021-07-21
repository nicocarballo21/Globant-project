import React from 'react';
import FlashMessage from 'react-native-flash-message';
import store from './redux/store';
import { Provider } from 'react-redux';

import { FirstScreen } from './components';
import Camera from './components/Camera';

import { View } from 'react-native';

import { StyleSheet } from 'react-native';

import {
  Login,
  Matcher,
  Register,
  UserData,
  UserDetails,
  SelectSkills,
} from './screens';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstScreen" headerMode={'none'}>
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UserData" component={UserData} />
          <Stack.Screen name="Matcher" component={Matcher} />
          <Stack.Screen name="Camera" component={Camera} /> */}
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
