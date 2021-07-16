import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
    alignItems: "center"
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    color: colors.white,
    backgroundColor: colors.blackPearl,
    padding: 32,
    fontSize: 24,
    position: "relative"
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
  },
  pressableImg: {
    position: "absolute",
    top: 32,
    left: 32,
  },
  arrowImg: {
    width: 32,
    height: 32,
  },
  textContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  keyText: {
    color: colors.white,
    backgroundColor: colors.blackPearl,
    width: "100%",
    textAlign: "center",
    borderWidth: 1,
  },
  valueText: {
    color: colors.white,
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
    height: 32,
    textAlignVertical: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    width: 100,
    height: 50,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.charade,
    margin: 5
  },
  pressableTxt: {
    color: colors.white,
  },
  skillsText: {
    width: "100%",
    color: colors.white,
    textAlign: "center",
    padding: 16,
    fontSize: 14,
    borderBottomWidth: 1,
  },
  userImg: {
    width: 100,
    height: 100,
  },
  btn: {
    width: "90%",
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: colors.blackPearl,
    borderRadius: 8,
    margin: 32,
    textAlign: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white"
  },
})

export default styles