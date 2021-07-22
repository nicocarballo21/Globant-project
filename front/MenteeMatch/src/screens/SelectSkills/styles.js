import { StyleSheet } from 'react-native';
import { globantBright, globantDark } from '../../assets/styles/colors';

let theme = 'light'
let colors

if(theme === 'dark')
  colors = globantDark

if(theme === 'light')
  colors = globantBright

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    padding: 32,
    fontSize: 24,
    position: 'relative',
    zIndex: 10,
  },
  headerText: {
    color: colors.text,
    fontSize: 24,
    textAlign: 'center',
  },
  arrowImg: {
    backgroundColor: "black"
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    borderColor: colors.blackPearl,
    backgroundColor: colors.lightgray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    elevation: 1,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.charade,
    margin: 5,
    elevation: 5,
    width: 120,
    height: 75,
  },
  pressed: {
    backgroundColor: colors.green
  },
  pressableTxt: {
    color: colors.text,
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
    color: colors.text,
    fontSize: 18,
  },
  menteeQtyTxt: {
    color: colors.text,
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
  nextBtn: {
    marginTop: 16,
    marginBottom: 32,
  },
});

export default styles;
