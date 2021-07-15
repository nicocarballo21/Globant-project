import React from 'react';
import {NativeRouter, Route, Redirect} from 'react-router-native';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import UserDetails from './components/UserDetails/UserDetails';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';

// components
import Login from './screens';

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/login" component={Login} />
      </View>
      <UserDetails />

      <Redirect from="/" to="/login" />
      <FlashMessage position="top" />
    </NativeRouter>
  </Provider>

  // definit las rutas y los link como en react router web
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default App;
