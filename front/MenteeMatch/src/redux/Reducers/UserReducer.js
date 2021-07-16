import {createReducer, createAction, createAsyncThunk} from '@reduxjs/toolkit';
import reduxServices from '../../services/reduxServices';

const initialState = {
  name: null,
  surname: null,
  email: null,
  phone: null,
  address: null,
  isMentor: null,
  isMentee: null,
  isAdmin: null,
  isLoggedIn: null,
  mentor: null,
  mentees: [],
  reunions: [],
  objectives: [],
  skills: [],
  peopleILike: [],
  peopleIDislike: [],
  matchs: [],
};

export const setUser = createAction('SET_USER');
export const userLogin = createAsyncThunk('USER_LOG_IN', async userData => {
  const {user} = await reduxServices.userLogin(userData);
  return user;
});

export const userRegister = createAsyncThunk('USER_REGISTER', async dataRegister => {
  const {register} = await reduxServices.userLogin(dataRegister);
  return register;
});

const userReducer = createReducer(initialState, {
  [userLogin.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
});




export default userReducer;
