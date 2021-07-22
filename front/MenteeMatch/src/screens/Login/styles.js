import { StyleSheet } from 'react-native';
import { globantBright, globantDark } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: globantBright.bg,
  },

  logo: {
    width: 150,
    height: 150,
    backgroundColor: '#F5F6F7',
    borderColor: globantBright.green,
    borderWidth: 2,
    borderRadius: 100,
  },

  inputs: {
    width: '100%',
    alignItems: 'center',
  },

  footer: {
    color: 'white',
    marginTop: 30,
    fontSize: 15,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default styles;
