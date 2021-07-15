import React from 'react';
import { View, Text } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import UserDetails from './components/UserDetails/UserDetails';
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <UserDetails />
    </Provider>
  );
};

export default App;
