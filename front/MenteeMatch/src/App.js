import { assertExpressionStatement } from '@babel/types';
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
// import { Dropdown } from '../package.json/react-native-material-dropdown';
import axios from 'axios';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
import Register from './screens/register/Register';
import UserData from './screens/userData/UserData';

const App = () => {


  return (
    <NativeRouter>
      <View>
        <Text>Bievenido a la Home</Text>
        <Link style={{alignItems: "center",backgroundColor: "#DDDDDD",padding: 10}} 
          to="/registerPerson"><Text>Registrase</Text>
        </Link>
  
        <Route path="/registerPerson" component={Register}/>
        <Route path="/registerAcedemic" component={UserData}/>

      </View>
    </NativeRouter>
  );
};

export default App;



