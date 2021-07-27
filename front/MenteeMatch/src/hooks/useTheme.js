import { useEffect, useState } from 'react';
import { getData, storeData } from '../utils/storage';

const useTheme = () => {
  const [theme, setTheme] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    getData('menteeTheme').then(res => {
      if (res === 'dark' || res === 'ligth') {
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
  }, [theme]);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return { isEnabled, toggleSwitch };
};

export default useTheme;
