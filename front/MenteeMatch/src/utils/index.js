import {showMessage} from 'react-native-flash-message';

export const loginMessage = type => {
  showMessage({
    message: type ? 'Success' : 'Error',
    description: type ? 'Now you are login!' : 'Something is wrong!',
    type: type ? 'success' : 'danger',
    icon: type ? 'success' : 'danger',
    floating: true,
  });
};
