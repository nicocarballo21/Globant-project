import { StyleSheet} from 'react-native'
import {colors} from '../../assets/styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
    alignItems: 'center',
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
    zIndex: 10
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    borderColor: colors.blackPearl,
    borderWidth: 1,
    elevation: 1,
    /* borderColor: 'red',
    borderWidth: 4, */
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
    width: 120,
    height: 75,
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
    /* flex: 1, */
    justifyContent: "center",
    alignItems: "center",
    height: "50%"
  },
  menteeQtyBox: {
    alignSelf: "center",
    width: 125,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    /* borderColor: 'red',
    borderWidth: 4, */
  },
  menteeQtyTitleTxt: {
    padding: 16,
    color: colors.zircon,
    fontSize: 18,
  },
  menteeQtyTxt: {
    color: colors.zircon,
    fontSize: 18,
  },
  menteeQtyBtn: {
    width: 25,
    height: 25,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  nextBtn: {
    marginTop: 16,
    marginBottom: 32,
  }
});

export default styles;
