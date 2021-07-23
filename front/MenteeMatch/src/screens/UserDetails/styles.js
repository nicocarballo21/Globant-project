import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  mainContainer: { height: '100%', flex: 1 },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: globantBright.bg,
    alignItems: 'center',
  },
  flatlist: {
    flex: 9,
    justifyContent: 'space-around',
    width: '100%',
    marginLeft: 2.5,
  },
  pressableFoto: {
    flex: 2.5,
    width: '100%',
    alignItems: 'center',
  },
  UserInfo: {
    flex: 3,
    width: '100%',
  },
  btnsContainer: {
    flex: 4.5,
    width: '100%',
    alignItems: 'center',
  },
  keyText: {
    flex: 1,
    color: globantBright.text,
    backgroundColor: globantBright.bg,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  valueText: {
    flex: 1,
    color: globantBright.text,
    backgroundColor: globantBright.inputBg,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globantBright.inputBg,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: globantBright.green,
    margin: '0.5%',
    width: '32%',
    elevation: 5,
  },
  pressableTxt: {
    color: globantBright.text,
  },
  skillsText: {
    width: '100%',
    color: globantBright.text,
    textAlign: 'center',
    padding: 16,
    fontSize: 14,
    borderBottomWidth: 1,
  },
  userImg: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    marginBottom: 16,
  },
  panel: {
    padding: 20,
    backgroundColor: globantBright.bg,
    borderWidth: 0.5,
    borderColor: globantBright.gray,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelTitle: {
    fontSize: 27,
    color: globantBright.text,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: globantBright.text,
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: globantBright.green,
    alignItems: 'center',
    marginVertical: 8,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: globantBright.bg,
  },
});

export default styles;
