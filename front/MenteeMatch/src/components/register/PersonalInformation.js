import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles'

export default ({handleChangeCountry, handleChangeWorkPosition,handleChangePhone, handleChangeAbout}) => {

    return(
        <View style={styles.login}>
            <Text style={styles.buttonText}>Informacion del Usuario</Text>
            <View style={styles.inputs}>
                <TextInput style={styles.input}placeholder="País" onChangeText={handleChangeCountry}/>
                <TextInput style={styles.input} placeholder="Puesto" onChangeText={handleChangeWorkPosition}/>
                <TextInput style={styles.input} placeholder="Teléfono" onChangeText={handleChangePhone}/>  
                <TextInput style={styles.input}placeholder="Acerca de mi..."
                handleChangeAbout={handleChangeAbout}/>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}










