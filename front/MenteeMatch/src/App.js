import React from 'react';
import FlashMessage from 'react-native-flash-message';
import store from './redux/store';
import { Provider } from 'react-redux';

// Components
import firstScreen from './components/firstScreen';

// Screens
import { Login, Matcher, Register, UserData, UserDetails } from './screens';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="firstScreen" headerMode={"none"}>
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

export default App;
