import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: globantBright.green,
  },

  logo: {
    width: 150,
    height: 150,
    backgroundColor: globantBright.bg,
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
