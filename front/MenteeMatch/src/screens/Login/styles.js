import { StyleSheet } from 'react-native';
import { globantBright, globantDark } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  login: {
    backgroundColor: globantBright.bg,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  logo: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    marginVertical: 15,
    backgroundColor: '#F5F6F7',
    borderColor: globantBright.green,
    borderWidth: 2,
    borderRadius: 100,
  },

  inputs: {
    width: '100%',
    alignItems: 'center',
  },

  error: {
    color: 'red',
    fontSize: 16,
  },

  create: {
    color: 'gray',
    paddingTop: 40
  }
});

export default styles;
