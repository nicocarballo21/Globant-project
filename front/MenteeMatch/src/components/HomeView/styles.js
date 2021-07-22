import { StyleSheet } from 'react-native';
import { globantBright } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  foto: {
    width: 150,
    height: 150,
    backgroundColor: 'lightgrey',
    borderRadius: 100,
  },

  user_data_container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: globantBright.inputBg,
    width: '100%',
    height: '45%',
  },

  text: {
    margin: 10,
    fontSize: 20,
  },

  recuadro_container: {
    display: 'flex',
    backgroundColor: globantBright.bg,
    justifyContent: 'space-evenly',
    width: '100%',
    height: '55%',
    alignItems: 'center',
  },

  recuadro_1: {
    width: '80%',

    backgroundColor: globantBright.green,
    margin: 15,
    borderRadius: 10,
    textAlign: 'justify',
  },
  recuadro_2: {
    width: '80%',

    backgroundColor: globantBright.green,
    margin: 15,
    borderRadius: 10,
    textAlign: 'justify',
  },

  background: {
    backgroundColor: globantBright.bg,
    display: 'flex',
  },

  inScrollViewDate: {
    flexDirection: 'row',
    textAlign: 'left',
  },

  inScrollViewObjetive: {
    flexDirection: 'column',
  },

  inScrollViewText: {
    textAlign: 'left',
    fontSize: 14,
    textAlignVertical: 'center',
  },

  error: {
    color: '#ff0039',
    fontSize: 14,
    marginLeft: -190,
    padding: -2,
  },
});

export default styles;
