import { configureStore } from '@reduxjs/toolkit';
import { skillsReducer } from './Reducers/Skills';
import userReducer from './Reducers/UserReducer';
import { matchesReducer } from './Reducers/matchesReducer';
import authReducer from './Slices/authSlice';
import { themeReducer } from './Reducers/themeReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    user: userReducer,
    matches: matchesReducer,
    skills: skillsReducer,
    auth: authReducer,
    theme: themeReducer,
    middleware: [thunk, logger]
  },
});

export default store;
