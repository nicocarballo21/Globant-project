import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import PersonalInformation from '../../components/register/PersonalInformation';



export default () => {
    const[phone, setPhone] = useState('')
    const[workPosition, setWorkPosition] = useState('')
    const[country, setCountry] = useState('')
    const[about, setAbout] = useState('')

    handleChangePhone = (phone) => {
        const value = phone
        setPhone(value)
    }
    handleChangeWorkPosition = (workPosition) => {
        const value = workPosition
        setWorkPosition(value)
    }
    handleChangeCountry = (country) => {
        const value = country
        setCountry(value)
    }
    handleChangeAbout = (about) => {
        const value = about
        setAbout(value)
    }

    return(
        <View>
            <PersonalInformation handleChangePhone={handleChangePhone} handleChangeWorkPosition={handleChangeWorkPosition} 
            handleChangeCountry={handleChangeCountry} handleChangeAbout={handleChangeAbout}/>
        </View>

    )
}
