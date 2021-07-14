import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'cadetblue',
  },

  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cadetblue',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
  },

  input: {
    width: '70%',
    height: 50,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },

  button: {
    width: '50%',
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  footer: {
    color: 'white',
    marginTop: 30,
    fontSize: 15,
  },
});

export default styles;
