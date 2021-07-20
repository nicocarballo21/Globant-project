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
import { Login }from './screens';
import Camera from "./components/Camera";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  React.useEffect(() => {
    //storeData({name:"test"},"user_key")
    //getData("user_key").then(value => console.log(value))
  }, []);
    
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="firstScreen"
                >
                    <Stack.Screen name="firstScreen" component={firstScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="UserDetails" component={UserDetails} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="UserData" component={UserData} />
                    <Stack.Screen name="Matcher" component={Matcher} />
                    <Stack.Screen name="Camera" component={Camera} />
                </Stack.Navigator>
                <FlashMessage position="top" />
            </NavigationContainer>
        </Provider>
    )

};

const styles = {
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
};

export default App;
