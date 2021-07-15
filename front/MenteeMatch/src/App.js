import React from 'react';

import {useHistory} from 'react-router-dom';

import {NativeRouter, Route, Switch} from 'react-router-native';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import UserDetails from './components/UserDetails/UserDetails';
import firstScreen from './components/firstScreen';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
//import { storeData, getData } from './utils/storage.js'

// components
import Login from './screens';

const App = () => {
  const history = useHistory();
  React.useEffect(() => {
    //storeData({name:"test"},"user_key")
    //getData("user_key").then(value => console.log(value))
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route path="/" component={firstScreen} />
            <Route path="/login" component={Login} />
            <Route path="/userDetail" component={UserDetails} />
          </Switch>
        </View>
        <FlashMessage position="top" />
      </NativeRouter>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default App;
