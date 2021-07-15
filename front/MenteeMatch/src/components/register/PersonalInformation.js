import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles'

export default ({handleChangeCountry, handleChangeWorkPosition,handleChangePhone, handleChangeAbout}) => {

    return(
        <View>
            <Text>Datos Personales</Text>
            <Text>Pais*</Text>
            <TextInput style={styles.input}placeholder="Pais" onChangeText={handleChangeCountry}/>

            <Text>Puesto*</Text>
            <TextInput style={styles.input} placeholder="Fullstack developer javascript Jr" onChangeText={handleChangeWorkPosition}/>

            <Text>Teléfono*</Text>
            <TextInput style={styles.input} placeholder="011-1111-1111" onChangeText={handleChangePhone}/>  

            <Text>Descripción Personal*</Text>
            <TextInput style={styles.input}placeholder="Breve Descripción sobre la trayectoria que quieres realizar en Globant"
            onChangeText={handleChangeAbout}/>

            <TouchableOpacity
            style=
            {{
                alignItems: "center",
                backgroundColor: "#DDDDDD",
                padding: 10
            }}>
            <Text>Siguiente</Text>
            </TouchableOpacity>
        </View>

    )
}










