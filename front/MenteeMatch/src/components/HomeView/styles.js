import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
    flex: 1,
  },

  user_data_container: {
    flex: 4,
    alignItems: 'center',
  },

  recuadro_container: {
    flex: 6,
  },

  container_interno: {
    maxHeight: '100%',
    flex: 1,
    alignItems: 'center',
  },

  recuadro_interno: {
    flex: 1,
    width: '85%',
    borderRadius: 10,
    margin: '4%',
    textAlign: 'justify',
    marginBottom: '2%',
  },

  recuadro_interno2: {
    flex: 1,
    width: '85%',
    borderRadius: 10,
    margin: '4%',
    textAlign: 'justify',
    marginTop: '2%',
  },

  foto: {
    width: '35%',
    height: '55%',
    backgroundColor: 'lightgrey',
    borderRadius: 100,
  },

  text: {
    margin: 10,
    fontSize: 20,
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
