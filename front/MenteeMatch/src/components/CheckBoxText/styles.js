import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  option: {
    width: 200,
    backgroundColor: globantBright.lightgray,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: globantBright.grey,
    borderWidth: 2,
    marginLeft: 20,
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
});

export default styles;
