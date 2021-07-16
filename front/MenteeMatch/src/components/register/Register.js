import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {useHistory} from 'react-router-native';
import styles from './styles';
import axios from 'axios';

export default () => {
    const history = useHistory()
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    function onSubmit(data) { 
        console.log(data);
        history.push("/registerAcedemic")
    }

    return (
    <View style={styles.login}>
        <Text style={styles.buttonText}>Registro</Text>

        <View style={styles.inputs}>
        <Controller control={control} rules={{required: true}}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value}
            placeholder="Nombre"/>)}
            name="firstName"
            defaultValue=""/>
            {errors.firstName && <Text>Requiere Nombre.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value}
            placeholder="Apellido"/>)}
            name="lastName"
            defaultValue=""/>
            {errors.lastName && <Text>Requiere Apellido.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} 
            placeholder="menteematch@ejemplo.com"/>)}
            name="email"
            defaultValue=""/>
            {errors.email && <Text>Requiere Email.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Contraseña"/>)}
            name="password"
            defaultValue=""/>
            {errors.password && <Text>Requiere Contraseña.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} 
            placeholder="Confirmar Contraseña"/>)}
            name="passwordConf"
            defaultValue=""/>
            {errors.passwordConf && <Text>Requiere Confirmación de Contraseña.</Text>}

        <Button title="Siguiete" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

 




