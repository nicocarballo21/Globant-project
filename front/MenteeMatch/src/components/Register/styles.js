import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  login: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: globantBright.green,
  },

  inputs: {
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 26,
    color: globantBright.text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  error: {
    color: '#ff0039',
    fontSize: 14,
    marginLeft: -190,
    padding: -2,
  },
});

export default styles;
