import { StyleSheet } from "react-native";
import {globantBright} from '../../assets/styles/colors'

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

