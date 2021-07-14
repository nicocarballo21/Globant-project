import React from 'react';
import { View, Text } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import ComponentTest from './components/ComponentTest/ComponentTest';
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Inicio</Text>
      </View>
        <ComponentTest />
    </Provider>
  );
};

export default App;
