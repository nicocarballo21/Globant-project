import { configureStore } from '@reduxjs/toolkit';
import { selectedUserReducer } from './Reducers/selectedUser';
import { skillsReducer } from './Reducers/Skills';
import userReducer from './Reducers/UserReducer';
import { usersReducer } from './Reducers/usersReducer';
import { matchesReducer } from './Reducers/matchesReducer';
import authReducer from './Slices/authSlice';
import { themeReducer } from './Reducers/themeReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
    matches: matchesReducer,
    skills: skillsReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
