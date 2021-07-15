import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const UserDetails = () => {
  const selectedUser = useSelector(state => state.selectedUser);

  const {name, surname, email, skills} = selectedUser;
  return (
    <View>
      <Text>Perfil del usuario</Text>
      <Text>
        {`Nombre: ${name} ${surname}
           Contacto: ${email}
           
          `}
      </Text>
    </View>
  );
};

export default UserDetails;
