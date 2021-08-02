import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'blue',
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center',
        paddingTop: '20%',
        // justifyContent: 'center',
        width: '80%'
    },
    meetContainer: {

    },
    title: {
        marginBottom: '20%',
        fontSize: 25
    },
    date: {
        margin: 20
    },
    input: {
        width: '100%',
        height: 54,
        padding: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 15,
      },
    placeholder: {
        color: '#606060'
    },
    dropDown: {
        alignSelf: 'center',
        backgroundColor: '#f7f7f7'
    },
    error: {
        color: '#ff0039',
        fontSize: 14,
        marginLeft: -190,
        padding: -2,
      },
    
})

export default styles;
