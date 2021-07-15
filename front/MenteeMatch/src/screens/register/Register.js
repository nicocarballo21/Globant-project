import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useHistory} from 'react-router-native';
import axios from 'axios';
import Register from '../../components/register/Register';

export default () => {
    const[name, setName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[passwordConf, setPasswordConf] = useState('')

    const history = useHistory()

    handleChangeName = (name) => {
        const value = name
        setName(value)
    }
    handleChangeLastName = (lastName) => {
        const value = lastName
        setLastName(value)
        console.log(lastName)
    }
    handleChangeEmail = (email) => {
        const value = email
        setEmail(value)
    }
    handleChangePassword = (password) => {
        const value = password
        setPassword(value)
    }
    handleChangePasswordConf = (passwordConf) => {
        const value = passwordConf
        setPasswordConf(value)
    }

    handleSubmit = (name, lastName, email, phone, password, passwordConf) => {
        /*axios.post('ruta', {name,lastName,email,phone,residence,workPosition,country})
        .then((response)=> console.log(response))
        .catch((error)=> console.log(error))*/
        console.log("siguiente---->")
        history.push("/registerAcedemic")
    };
    
    return(
        <View>
            <Register handleChangeName={handleChangeName} handleChangeLastName={handleChangeLastName}
            handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword}
            handleChangePasswordConf={handleChangePasswordConf} handleSubmit={handleSubmit}/>
        </View>
    )
}
