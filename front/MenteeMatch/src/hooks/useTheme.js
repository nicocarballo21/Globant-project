import { useEffect, useState } from 'react';
import { getData, storeData } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { setReduxTheme } from '../redux/Reducers/themeReducer';

const useTheme = () => {
  const [theme, setTheme] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData('menteeTheme').then(res => {
      if (res) {
        setTheme(res);
        setIsEnabled(x => res === 'dark');
      }
    });
  }, []);

  useEffect(() => {
    setTheme(previousState => (isEnabled ? 'dark' : 'ligth'));
  }, [isEnabled]);

  useEffect(() => {
    storeData('menteeTheme', theme);
    dispatch(setReduxTheme(theme));
  }, [dispatch, theme]);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return { isEnabled, toggleSwitch };
};

export default useTheme;
