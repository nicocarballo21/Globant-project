import React from 'react';
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

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let user;
    const storageUser = async () => {
      try {
        user = await getData('user');
        user ?? dispatch(setUser(user));
      } catch (e) {
        console.log(e);
      }
      user ?? dispatch(restoreToken({ token: user.token }));
    };
    storageUser();
  }, [dispatch, auth.userToken]);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {auth.userToken ? <HomeApp /> : <LoginApp />}
          <FlashMessage position="top" />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
