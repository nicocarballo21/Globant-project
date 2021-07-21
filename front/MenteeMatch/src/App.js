import React from 'react';
import FlashMessage from 'react-native-flash-message';
import store from './redux/store';
import { Provider } from 'react-redux';

// Components
import { FirstScreen } from './components';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';
import { restoreToken } from './redux/Slices/authSlice';
import { getData } from './utils/storage'
import { HomeApp, LoginApp} from './navigation';
import { setUser } from "./redux/Reducers/UserReducer"

const AppWrapper = () => <Provider store={store}><App/></Provider>

const App = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        let user;
        const storageUser = async () => {
            try {
                user = await getData('user')
                dispatch(setUser(user))
            } catch (e) {
                console.log(e)
            }
            if (user) dispatch(restoreToken({ token: user.token }))
            //else dispatch(restoreToken({ token: null }))
        }
        storageUser();
    }, [dispatch, auth.userToken])

    //if (auth.isLoading) {
    //    return <FirstScreen />
    //}

    return (
        <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer>
                { auth.userToken ? (
                    <HomeApp />
                    ) : (
                    <LoginApp />
                ) }
            <FlashMessage position="top" />
            </NavigationContainer>
        </SafeAreaProvider>
        </ Provider >
    )

  //return (
  //  //<Provider store={store}>
  //  <SafeAreaProvider>
  //    <NavigationContainer>
  //      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
  //        <Stack.Screen name="Home" >
  //          { () => (
  //            <Tab.Navigator initialRouteName="Home"
  //              tabBarOptions={{ activeTintColor:"#BFD732", inactiveTintColor: "#666666", showLabel: true}}
  //            >
  //              <Tab.Screen name="Matcher" component= { Matcher } options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people-circle" size={size} color={color} /> }}  />
  //              <Tab.Screen name="Home" component={ Home } options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />
  //              <Tab.Screen name="UserDetails" options={{ tabBarLabel: "Perfil", tabBarIcon: ({ color, size }) => <Ionicons name = "person-circle" size={size} color={color} /> }} >
  //              { () => (
  //                  <Drawer.Navigator initialRouteName="UserDetails" drawerContent={props => <CustomDrawerContent {...props}/>} drawerContentOptions={{activeTintColor:"#BFD732"}}>
  //                      <Drawer.Screen name="UserDetails" component={UserDetails} options={{title:"Mi perfil"}} />
  //                      <Drawer.Screen name="EditProfile" component={Register} options={{title:"Editar perfil"}}/>
  //                      <Drawer.Screen name="CancelMatch" component={UserData}/>
  //                  </Drawer.Navigator>
  //              ) }
  //              </Tab.Screen>
  //            </Tab.Navigator>
  //          ) }
  //        </Stack.Screen>
  //        <Stack.Screen name="FirstScreen" component={FirstScreen} />
  //        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
  //        <Stack.Screen name="UserDetails" component={UserDetails} />
  //        <Stack.Screen name="Register" component={Register} />
  //        <Stack.Screen name="UserData" component={UserData} />
  //        <Stack.Screen name="Matcher" component={Matcher} />
  //        <Stack.Screen name="Camera" component={Camera} />
  //      </Stack.Navigator>
  //      <FlashMessage position="top" />
  //    </NavigationContainer>
  //  </SafeAreaProvider>
  //  //</Provider>
  //);
};

//export default App;
export default AppWrapper;
