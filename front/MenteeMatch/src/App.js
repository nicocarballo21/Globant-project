import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import firstScreen from './components/FirstScreen';

//screens
import { Login, Matcher, Register, UserData, UserDetails } from './screens';

//navigation
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
        <Stack.Navigator initialRouteName="firstScreen" headerMode="none">
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
