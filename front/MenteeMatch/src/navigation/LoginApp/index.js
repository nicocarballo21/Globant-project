import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../../screens'

const Stack = createStackNavigator();

export default function LoginApp() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}
