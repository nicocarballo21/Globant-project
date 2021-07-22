import React from 'react';
import { Text, View, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

import { InputText, Button } from '../../components';
import logo from '../../utils/logo.png';

export default ({ onSubmit, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.login}>
      <Image style={styles.logo} source={logo} />

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
              placeholder="Pais"
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
              placeholder="position"
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
        {errors.about && (
          <Text style={styles.error}>{errors.about.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: 'Campo Requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              errors={errors.about}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Acerca de ..."
            />
          )}
          name="about"
          defaultValue=""
        />
        <Button
          title="Siguiente"
          pressFunction={() => {
            handleSubmit(onSubmit);
            navigation.navigate('RoleSelection');
          }}
        />
        <Button
          title="Omitir"
          pressFunction={() => navigation.navigate('RoleSelection')}
        />
      </View>
    </View>
  );
};
