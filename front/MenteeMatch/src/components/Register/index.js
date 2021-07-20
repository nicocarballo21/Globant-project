import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { InputText, Button } from '../../components';

import styles from './styles';

const Register = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.login}>
      <Text style={styles.buttonText}>Registro</Text>

      <View style={styles.inputs}>
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
        <Controller
          control={control}
          rules={{ required: 'Campo requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nombre"
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.surname && (
          <Text style={styles.error}>{errors.surname.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.surname}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Apellido"
            />
          )}
          name="surname"
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.email}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="menteematch@ejemplo.com"
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.password}
              onBlur={onBlur}
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              placeholder="Contraseña"
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.passwordConf && (
          <Text style={styles.error}>{errors.passwordConf.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.passwordConf}
              onBlur={onBlur}
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              placeholder="Confirmar Contraseña"
            />
          )}
          name="passwordConf"
          defaultValue=""
        />
        <Button title="Siguiente" pressFunction={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default Register;
