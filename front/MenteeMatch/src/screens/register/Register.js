import React, {useState} from 'react';
import {View} from 'react-native';
import {useHistory} from 'react-router-native';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import Register from '../../components/register/Register';
import { setUser } from '../../redux/user';

export default () => {
    const[name, setName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[passwordConf, setPasswordConf] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()
    const estado = useSelector((state) => state.user)
    

    handleChangeName = (name) => {
        const value = name
        dispatch(setUser({name: value}))
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
    handleSubmit = (name, lastName, email, phone, password, passwordConf, estado) => {
        /*axios.post('ruta', {name,lastName,email,phone,residence,workPosition,country})
        .then((response)=> console.log(response))
        .catch((error)=> console.log(error))*/
        console.log("siguiente---->", estado )
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
