import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: globantBright.bg,
    flex: 1,
  },

  titleBox: {
    flex: 1.25,
    backgroundColor: globantBright.green,
  },

  titleBox_like: {
    flex: 0,
    backgroundColor: globantBright.green,
  },

  title: {
    color: globantBright.text,
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 25,
  },
  subtitle: {
    color: globantBright.text,
    fontSize: 15,
    paddingLeft: 25,
    marginBottom: 5,
  },

  text: {
    color: globantBright.text,
    fontSize: 10,
  },

  subContainer_1: {
    flex: 3.8,
    // backgroundColor: 'red',
    // paddingBottom: 10,
  },

  subContainer: {
    flex: 5.25,
    // backgroundColor: 'green',
    // paddingBottom: 10,
  },

  lastText: {
    textAlign: 'center',
    paddingTop: '50%',
  },

  pressable: {
    justifyContent: 'center',
  },

  pressablePressed: {
    backgroundColor: 'gray',
  },
});

export default styles;
