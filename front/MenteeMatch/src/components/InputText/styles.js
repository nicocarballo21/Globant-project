import { StyleSheet } from 'react-native';
import { globantBright, globantDark } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 54,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    color: globantBright.text,
    borderColor: globantBright.text,
    backgroundColor: globantBright.inputBg,
    marginBottom: 15,
  },
  error: {
    width: '80%',
    height: 50,
    padding: 15,
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default styles;
