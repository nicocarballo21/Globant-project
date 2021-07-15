import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'cadetblue',
  },

  logo: {
    width: 150,
    height: 150,
  },

  inputs: {
    width: '100%',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    height: 50,
    padding: 15,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 20,
  },

  button: {
    width: '50%',
    elevation: 10,
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


  