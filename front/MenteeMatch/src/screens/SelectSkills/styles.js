import { StyleSheet} from 'react-native'
import {colors} from '../../assets/styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
    alignItems: 'center',
    /* borderColor: "red", */
    borderWidth: 4,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    color: colors.white,
    backgroundColor: colors.blackPearl,
    padding: 32,
    fontSize: 24,
    position: 'relative',
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',
  },
  btnsContainer: {
    flexDirection: 'row',
    position: 'relative',
    /* flexWrap: "wrap", */
    /* justifyContent: "center", */
    /* alignItems: "center", */
    /* marginHorizontal: 16, */
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blackPearl,
    /* width: 100, */
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.charade,
    margin: 5,
    elevation: 5,
  },
  pressed: {
    backgroundColor: "blue",
  },
  pressableTxt: {
    color: colors.white,
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
    borderColor: 'red',
    borderWidth: 4,
  },
});

export default styles;
