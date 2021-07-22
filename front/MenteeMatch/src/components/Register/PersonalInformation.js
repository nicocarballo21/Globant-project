import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

import { InputText, Button } from '../../components';
import { useNavigation } from '@react-navigation/native';

export default ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigation = useNavigation()

  return (
    <View style={styles.login}>
      <Text style={styles.buttonText}>Datos Personales</Text>

      <View style={styles.inputs}>
        {errors.country && (
          <Text style={styles.error}>{errors.country.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo Requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.country}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="País"
            />
          )}
          name="country"
          defaultValue=""
        />
        {errors.position && (
          <Text style={styles.error}>{errors.position.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo Requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.position}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Position"
            />
          )}
          name="position"
          defaultValue=""
        />
        {errors.phone && (
          <Text style={styles.error}>{errors.phone.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo Requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.phone}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
              placeholder="011-1111-1111"
            />
          )}
          name="phone"
          defaultValue=""
        />
        {errors.personalDescription && (
          <Text style={styles.error}>{errors.personalDescription.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo Requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.personalDescription}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Acerca de mí..."
            />
          )}
          name="personalDescription"
          defaultValue=""
        />
        <Button title="Siguiente" pressFunction={handleSubmit(onSubmit)} />
        <Button title="Omitir" pressFunction={() => navigation.navigate('RoleSelection')} />
      </View>
    </View>
  );
};
