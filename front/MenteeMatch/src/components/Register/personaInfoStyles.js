import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    backgroundColor: globantBright.bg,
  },

  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputs: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },

  buttonText: {
    fontSize: 26,
    color: globantBright.text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F6F7',
    borderColor: globantBright.green,
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 20,
  },

  error: {
    color: '#ff0039',
    fontSize: 14,
    marginLeft: -190,
    padding: -2,
  },
});

export default styles;
