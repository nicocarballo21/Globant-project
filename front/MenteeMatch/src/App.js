import React from 'react';
import {Text, View} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';

// components

import Login from './screens';

const App = () => (
  <NativeRouter>
    <Route exact path="/" component={Login} />
  </NativeRouter>

  // definit las rutas y los link como en react router web
);

export default App;
