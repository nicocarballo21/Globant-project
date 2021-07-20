import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  //Paleta ejemplo: color1: #233E8B, color2: #1EAE98, color3: #A9F1DF, color4: #FFFFC7
  container: {
    backgroundColor: globantBright.bg,
    height: '100%',
    //    flex: 1
  },
  title: {
    color: '#233E8B',
    fontSize: 20,
    paddingTop: 25,
    paddingLeft: 25,
  },
  subtitle: {
    color: '#233E8B',
    fontSize: 15,
    paddingLeft: 25,
  },
  text: {
    color: '#233E8B',
    fontSize: 10,
  },
  lastText: { textAlign: 'center', paddingTop: '50%' },
});

export default styles;
