import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  select_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '50%',
    backgroundColor: globantBright.inputBg,
    width: '100%',
  },
});
export default styles;
