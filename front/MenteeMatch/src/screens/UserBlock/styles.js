import { StyleSheet } from "react-native";
import {globantBright} from '../../assets/styles/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
        /* marginTop: 20, */
        paddingHorizontal: 2,
        width: 400,
        marginBottom: 10,
       /*  alignSelf: "center", */
    },
    block: {
        // position: "relative",
        paddingTop: 20,
        paddingBottom: 25,
        marginTop: 0,
        marginBottom: 10,
        flexDirection: "column",
        width: "90%",
        /* height: "auto", */
       borderWidth: 1,
       borderRadius: 20,
       /* margin: 5, */
       backgroundColor: "#e2e2e2",
       borderColor: "#e2e2e2",
       elevation: 12
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
        height: 85
    },
    skills: {
        fontSize: 13,
        textAlign: "center",
        lineHeight: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    likeButton: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: globantBright.grass
    },
    dislikeButton: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: globantBright.violet
    },
  });
