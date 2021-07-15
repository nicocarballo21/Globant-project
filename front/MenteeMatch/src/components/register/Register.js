import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './styles';


export default ({handleChangeName, handleChangeLastName,handleChangeEmail, handleChangePassword,
    handleChangePasswordConf, handleSubmit}) => {
    
    return(
        <View>
            <Text>Registro</Text>

            <Text>Nombre*</Text>
            <TextInput style={styles.input} placeholder="Nombre" onChangeText={handleChangeName}/>

            <Text>Apellido</Text>
            <TextInput style={styles.input} placeholder="Apellido" onChangeText={handleChangeLastName}/>

            <Text>Correo electrónico*</Text>
            <TextInput style={styles.input} placeholder="mentor@ejemplo.com" onChangeText={handleChangeEmail}/>

            <Text>Contraseña*</Text>
            <TextInput style={styles.input} placeholder="*******" onChangeText={handleChangePassword}/>

            <Text>Confirmar Contraseña*</Text>
            <TextInput style={styles.input} placeholder="*******" onChangeText={handleChangePasswordConf}/>
      
            {/* <Link style={{alignItems: "center",backgroundColor: "#DDDDDD",padding: 10}} 
                to="/registerAcedemic"><Text>Siguiente</Text>
            </Link> */}

            <TouchableOpacity style={{alignItems: "center",backgroundColor: "#DDDDDD",padding: 10}} 
            onPress={handleSubmit}>
                <Text>Siguiente</Text>
            </TouchableOpacity>

        </View>

    )
}
