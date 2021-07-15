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

const setUser = createAction('SET_USER');
const userLogin = createAsyncThunk('USER_LOG_IN', async userData => {
  const {user, token} = await reduxServices.userLogin(userData);
});

const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
  [userLogin.fullfilled]: (state, action) => action.payload,
});

export {setUser, userReducer};
