import {createReducer, createAction, createAsyncThunk} from '@reduxjs/toolkit';
import reduxServices from '../../services/reduxServices';
import {loginMessage} from '../../utils';
import {userLogin} from '../../services/reduxServices';

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
export const getUser = createAsyncThunk('USER_LOG_IN', async userData => {
  try {
    const { user } = await userLogin(userData);
    return user;
  } catch (error) {
    console.log(error);
  }
});

const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (state, action) => {
    const skills = state.skills
    const user = {...action.payload}
    user.skills = skills
    return user
  },
  [setUser]: (state, action) => action.payload
});

export default userReducer;