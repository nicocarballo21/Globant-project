import { StyleSheet } from 'react-native';
import { globantBright, globantDark } from '../../assets/styles/colors';
// let theme = 'light'
// let colors

// if(theme === 'dark')
//   colors = globantDark

// if(theme === 'light')
//   colors = globantBright

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globantBright.bg,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: globantBright.inputBg,
    padding: 32,
    fontSize: 24,
    position: 'relative',
    zIndex: 10,
  },
  headerText: {
    color: globantBright.text,
    fontSize: 24,
    textAlign: 'center',
  },
  arrowImg: {
    backgroundColor: 'black',
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    borderColor: globantBright.blackPearl,
    backgroundColor: globantBright.lightgray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    elevation: 1,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globantBright.bg,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: globantBright.charade,
    margin: 5,
    elevation: 5,
    width: 120,
    height: 75,
  },
  pressed: {
    backgroundColor: globantBright.green,
  },
  pressableTxt: {
    color: globantBright.text,
  },
  pressableImg: {
    position: 'absolute',
    top: 32,
    left: 32,
  },
  arrowImg: {
    width: 32,
    height: 32,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  menteeQtyBox: {
    alignSelf: 'center',
    width: 125,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menteeQtyTitleTxt: {
    padding: 16,
    color: globantBright.text,
    fontSize: 18,
  },
  menteeQtyTxt: {
    color: globantBright.text,
    textAlignVertical: 'center',
    fontSize: 18,
  },
  menteeQtyBtn: {
    width: 25,
    height: 25,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 0,
  },
  footer: {
    display: 'flex',
    backgroundColor: globantBright.inputBg,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15,
  },
});

export default styles;
