import { configureStore } from '@reduxjs/toolkit';
import { selectedUserReducer } from './Reducers/selectedUser';
import { skillsReducer } from './Reducers/Skills';
import userReducer from './Reducers/UserReducer';
import { usersReducer } from './Reducers/usersReducer';
import { matchesReducer } from './Reducers/matchesReducer';
import { meetsReducer } from './Reducers/meetsReducer';
import authReducer from './Slices/authSlice';
import { themeReducer } from './Reducers/themeReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
    matches: matchesReducer,
    skills: skillsReducer,
    auth: authReducer,
    theme: themeReducer,
    meets: meetsReducer,
    middleware: [thunk, logger]
  },
});

export default store;
