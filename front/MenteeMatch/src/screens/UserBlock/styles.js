import { StyleSheet } from "react-native";
import {globantBright} from '../../assets/styles/colors'

export const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    block: {
        // position: "relative",
        paddingTop: 20,
        flexDirection: "column",
        width: "90%",
        height: 200,
       borderWidth: 1,
       borderRadius: 20,
       margin: 5,
       backgroundColor: "#e2e2e2",
       borderColor: "#e2e2e2",
       elevation: 14
       //b7bfe5
   },
   title: {
       color: globantBright.violet,
       fontSize: 20,
       fontWeight: "bold",
       paddingTop: 25,
       marginLeft: "15%"
    },
    text: {
        color: "#434343",
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
        borderColor: globantBright.violet
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
