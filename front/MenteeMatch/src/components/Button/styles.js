import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  button: {
    width: '50%',
    backgroundColor: globantBright.lightgray,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: globantBright.grey,
    borderWidth: 2,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: globantBright.text,
    fontFamily: 'H',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
