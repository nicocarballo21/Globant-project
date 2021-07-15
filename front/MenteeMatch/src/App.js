import React from 'react';
import {NativeRouter, Route, Redirect} from 'react-router-native';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import UserDetails from './components/UserDetails/UserDetails';
import store from './redux/store';
//import { storeData, getData } from './utils/storage.js'

// components
import Login from './screens';

const App = () => {
    React.useEffect(() => {
        //storeData({name:"test"},"user_key")
        //getData("user_key").then(value => console.log(value))
    }, [])
    return (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/login" component={Login} />
      </View>
      <UserDetails />
      <Redirect from="/" to="/login" />
    </NativeRouter>
  </Provider>

  // definit las rutas y los link como en react router web
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default App;
