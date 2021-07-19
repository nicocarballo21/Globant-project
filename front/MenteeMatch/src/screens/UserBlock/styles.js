import { StyleSheet } from "react-native";
import globantBright from '../../assets/styles/colors'

export const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    block: {
        // position: "relative",
        paddingTop: 20,
        flexDirection: "column",
        width: "90%",
        height: 200,
       borderRadius: 20,
       margin: 5,
       backgroundColor: globantBright.lightgray,
       elevation: 10
       //b7bfe5
   },
   title: {
       color: globantBright.text,
       fontSize: 20,
       fontWeight: "bold",
       paddingTop: 25,
       marginLeft: "15%"
    },
    text: {
        color: globantBright.text,
        fontSize: 10,
        marginLeft: "15%"
     },
     img: {
        width: 90,
        height: 90,
        marginLeft: 25,
        paddingTop: 0,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: globantBright.green
    },
    skillsContainer:{
        marginTop: 20,
        paddingLeft: 20, 
        paddingRight: 20,
    },
    skills: {
        fontSize: 13,
        textAlign: "center",
        lineHeight: 20,
    }

  });

export const style2 = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    block: {
        // position: "relative",
        paddingTop: 20,
        flexDirection: "column",
        width: "90%",
        height: 200,
       borderWidth: 1,
       borderRadius: 20,
       borderBottomColor: "#4f4f4f",
       borderTopColor: "white",
       borderStartColor: "white",
       borderEndColor: "#4f4f4f",
       margin: 10,
       backgroundColor: "#c2c2c2"
   },
   title: {
       color: "#502a40",
       fontSize: 20,
       fontWeight: "bold",
       paddingTop: 25,
       marginLeft: "15%"
    },
    text: {
        color: "#502a40",
        fontSize: 10,
       marginLeft: "15%"

     },
     img: {
        width: 90,
        height: 90,
        marginLeft: 25,
        paddingTop: 0,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "black"
    },
    skillsContainer:{
        marginTop: 20,
        paddingLeft: 20, 
        paddingRight: 20,
    },
    skills: {
        fontSize: 13,
        textAlign: "center",
        lineHeight: 20 
    }

  });

//   export default styles