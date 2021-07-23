import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: globantBright.bg,
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: globantBright.bg,
    borderColor: globantBright.green,
    borderWidth: 2,
    borderRadius: 100,
  },
  logo_g_container: {
    height: '50%',
  },
  logoG: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: -250,
  },
});

export default styles;
