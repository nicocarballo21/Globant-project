import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: globantBright.bg,
    // borderColor:"red",
    // borderWidth: 5,
    // justifyContent: "space-evenly",
    flex: 1,
    // borderWidth: 4
  },
  titleBox: {
    // alignSelf: "flex-start",
    // borderColor:"gray",
    // borderWidth: 3,
    position: 'relative',
    top: 0,
  },
  subContainer: {
    // borderColor:"blue",
    // borderWidth: 5,
    // borderWidth: 3,
    // marginTop: 5
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
  lastText: { textAlign: 'center', paddingTop: '50%' },
  pressable: {
    justifyContent: 'center',
  },
  pressablePressed: {
    backgroundColor: 'gray',
  },
  optionsTxt: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  reloadMatchsBox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    top: -175
  },
  reloadMatchsTxt: {
    fontSize: 16,
    textAlign: "center"
  },
  reloadMatchsBtn: {
    width: "35%"
  },
  reloadAllDiscardedBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;
