import { StyleSheet } from "react-native";
import {globantBright} from '../../assets/styles/colors'

const styles = StyleSheet.create({
   //Paleta ejemplo: color1: #233E8B, color2: #1EAE98, color3: #A9F1DF, color4: #FFFFC7
   container: {
      backgroundColor: globantBright.bg,
       height: "100%",
    //    flex: 1
   },
   title: {
       color: globantBright.text,
       fontSize: 20,
       paddingTop: 25,
       paddingLeft: 25
    },
    subtitle: {
      color: globantBright.text,
      fontSize: 15,
      paddingLeft: 25
   },
    text: {
        color: globantBright.text,
        fontSize: 10
     },

  });

  export default styles