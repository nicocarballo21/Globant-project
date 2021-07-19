import {
  createReducer,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import reduxServices from '../../services/reduxServices';
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
  img: null
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

export const userRegister = createAsyncThunk(
  'USER_REGISTER',
  async dataRegister => {
    const { register } = await reduxServices.userLogin(dataRegister);
    return register;
  },
);

const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (state, action) => {
    const skills = state.skills;
    const user = { ...action.payload };
    user.skills = skills;
    return user;
  },
  [setUser]: (_, action) => action.payload,
});

export default userReducer;
