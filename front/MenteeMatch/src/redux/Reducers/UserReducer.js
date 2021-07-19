import {
  createReducer,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import reduxServices, { registerUser } from '../../services/reduxServices';
import { userLogin } from '../../services/reduxServices';

const initialState = {
  name: null,
  surname: null,
  email: null,
  position: null,
  phone: null,
  personalDescription: null,
  country: null,
  isMentor: null,
  isMentee: null,
  isAdmin: null,
  isLoggedIn: null,
  mentor: {},
  mentees: [],
  meets: [],
  skillsToLearn: [],
  skillsToTeach: [],
  likes: [],
  disLikes: [],
  maxMentees: null,
  img: null,
};

//------------------- Actions -------------------//
export const setUser = createAction('SET_USER');
export const getUser = createAsyncThunk('USER_LOG_IN', userLogin);
export const userRegister = createAsyncThunk('USER_REGISTER', registerUser);

//------------------- Reducer -------------------//
const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => action.payload,
});

export default userReducer;
