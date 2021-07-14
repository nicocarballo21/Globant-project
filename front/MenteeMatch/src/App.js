import React from 'react';
import {NativeRouter, Route, Redirect} from 'react-router-native';
import {View, StyleSheet} from 'react-native';

// components
import Login from './screens';

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/login" component={Login} />
    </View>

    <Redirect from="/" to="/login" />
  </NativeRouter>

  // definit las rutas y los link como en react router web
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default App;
