import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

export default () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) { 
        console.log(data);
        history.push()
    }

  return (
    <View style={styles.login}>
        <Text style={styles.buttonText}>Datos Personales</Text>

        <View style={styles.inputs}>
        <Controller control={control} rules={{required: true}}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value}
            placeholder="País"/>)}
            name="country"
            defaultValue=""/>
            {errors.country && <Text>Requiere País.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value}
            placeholder="Puesto"/>)}
            name="position"
            defaultValue=""/>
            {errors.position && <Text>Requiere Puesto.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} 
            placeholder="011-1111-1111"/>)}
            name="phone"
            defaultValue=""/>
            {errors.phone && <Text>Requiere Teléfono.</Text>}

        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Acerca de..."/>)}
            name="about"
            defaultValue=""/>
            {errors.about && <Text>Requiere Acerce de ...</Text>}

        <Button title="Siguiete" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}










