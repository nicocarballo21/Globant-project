import {configureStore} from '@reduxjs/toolkit';
import {selectedUserReducer} from './Reducers/selectedUser';
import { skillsReducer } from './Reducers/Skills';
import userReducer from './Reducers/UserReducer';
import {usersReducer} from './Reducers/usersReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
    skills: skillsReducer
  },
});

export default store;
