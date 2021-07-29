import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './personaInfoStyles';

import { InputText, Button } from '../../components';
import logo from '../../utils/logo.png';
import { useNavigation } from '@react-navigation/native';
import useMode from '../../hooks/useMode';

const PersonalInformation = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mode } = useMode();

  const navigation = useNavigation();

  return (
    <View style={{ ...styles.login, backgroundColor: mode.bg }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          style={{ ...styles.logo, borderColor: mode.green }}
          source={logo}
        />

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
                placeholder="Posición en la empresa"
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
            <Text style={styles.error}>
              {errors.personalDescription.message}
            </Text>
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
          <Button title="Guardar" pressFunction={handleSubmit(onSubmit)} />
          <Button
            title="Omitir"
            pressFunction={() => navigation.navigate('RoleSelection')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInformation;
