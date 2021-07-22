import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: globantBright.bg,
  },
  text: {
    fontSize: 25,
    color: globantBright.text,
    fontFamily: 'H',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    textDecorationLine: 'none',
  },
  button: {
    backgroundColor: globantBright.green,
    borderColor: globantBright.green,
  },
});
export default styles;
