import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import firstScreen from './components/firstScreen';

//screens
import { Login, Matcher, UserDetails, Register, UserData } from './screens';

const App = () => {
  React.useEffect(() => {
    //storeData({name:"test"},"user_key")
    //getData("user_key").then(value => console.log(value))
  }, []);

  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/login" component={Matcher} />
            <Route exact path="/userDetails" component={UserDetails} />
            <Route exact path="/registerPerson" component={Register} />
            <Route exact path="/registerAcedemic" component={UserData} />
            <Route exact path="/matcher" component={Matcher} />
            <Route exact path="/" component={firstScreen} />
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
