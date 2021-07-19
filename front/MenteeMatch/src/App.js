import { assertExpressionStatement } from '@babel/types';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from 'react';

import { useHistory } from 'react-router-dom';

import { NativeRouter, Route, Switch } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import UserDetails from './screens/UserDetails';
import firstScreen from './components/firstScreen';
import store from './redux/store';

import Register from './screens/register/Register';
import UserData from './screens/userData/UserData';

import { Matcher } from '../src/screens';
// console.log("Matcher en App: ", Matcher)

import FlashMessage from 'react-native-flash-message';

//import { storeData, getData } from './utils/storage.js'

// components
import { Login } from './screens';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './assets/styles/colors';

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    //storeData({name:"test"},"user_key")
    //getData("user_key").then(value => console.log(value))
  }, []);

  const headerStyle = {
    headerStyle: {
      backgroundColor: "cadetblue",
      elevation: 0, //elevation se usa para sacar la sombra del header en android
    },
    headerTintColor: colors.white,
    headerTitleAlign: 'center',
    headerTitle: "",
    headerBackImage: () => null, 
  };

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="firstScreen" /* screenOptions={headerStyle} */ headerMode={"none"}>
          <Stack.Screen name="firstScreen" component={firstScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UserData" component={UserData} />
          <Stack.Screen name="Matcher" component={Matcher} />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
};

export default App;
