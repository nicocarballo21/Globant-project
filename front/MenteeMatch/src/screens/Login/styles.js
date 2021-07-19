import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'cadetblue',
  },

  logo: {
    width: 150,
    height: 150,
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
    textAlign: 'left',
  },
});

export default styles;
