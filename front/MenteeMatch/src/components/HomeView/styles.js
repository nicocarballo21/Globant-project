import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  foto: {
    width: 150,
    height: 150,
    backgroundColor: 'lightgrey',
    borderRadius: 100,
  },

  text: {
    margin: 10,
    fontSize: 20,
  },

  recuadro: {
    width: 325,
    height: 120,
    backgroundColor: 'lightgrey',
    margin: 10,
    borderRadius: 10,
    textAlign: 'justify',
  },

  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cadetblue',
    height: '100%',
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
    textAlignVertical: 'center'
  },

  error: {
    color: '#ff0039',
    fontSize: 14,
    marginLeft: -190,
    padding: -2,
  },
});

export default styles;
