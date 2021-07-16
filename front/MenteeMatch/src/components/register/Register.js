import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './styles';


export default ({handleChangeName, handleChangeLastName,handleChangeEmail, handleChangePassword,
    handleChangePasswordConf, handleSubmit, buttonNext, dataRegister}) => {
    
    return(
        <View style={styles.login}>
            <Text style={styles.buttonText}>Registro</Text>
            <View style={styles.inputs}>
                <TextInput style={styles.input} placeholder="Nombre" onChangeText={handleChangeName}/>
                <TextInput style={styles.input} placeholder="Apellido" onChangeText={handleChangeLastName}/>
                <TextInput style={styles.input} placeholder="mentor@ejemplo.com" onChangeText={handleChangeEmail}/>
                <TextInput style={styles.input} placeholder="Contraseña" onChangeText={handleChangePassword}/>
                <TextInput style={styles.input} placeholder="Confirmar Contraseña" onChangeText={handleChangePasswordConf}/>
                <TouchableOpacity style={styles.button}
                onPress={()=>handleSubmit(dataRegister)}>
                    <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
