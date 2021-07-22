import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import store from './redux/store';
import { Provider } from 'react-redux';
import { FirstScreen } from './components';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { restoreToken } from './redux/Slices/authSlice';
import { getData } from './utils/storage';
import { HomeApp, LoginApp } from './navigation';
import { setUser } from './redux/Reducers/UserReducer';
import { TapGestureHandler } from 'react-native-gesture-handler';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfStoragedUser = async () => {
      try {
        const user = await getData('user');
        user && dispatch(setUser(user));
      } catch (e) {
        console.log(e);
      }
    };
    checkIfStoragedUser();
  }, []);


  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {user.token ? <HomeApp /> : <LoginApp />}
          <FlashMessage position="top" />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
