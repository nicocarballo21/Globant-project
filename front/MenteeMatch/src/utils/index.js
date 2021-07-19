import { showMessage } from 'react-native-flash-message';

export const loginMessage = type => {
  showMessage({
    message: type ? 'Exitoso' : 'Error',
    description: type ? 'Ahora estás logueado!' : 'Algo salió mal!',
    type: type ? 'success' : 'danger',
    icon: type ? 'success' : 'danger',
    floating: true,
  });
};

export const simpleMessage = (message, description, type) => {
  showMessage({
    message: message,
    description: description,
    //types: success, danger
    type: type,
    icon: type,
    floating: true,
  });
};
