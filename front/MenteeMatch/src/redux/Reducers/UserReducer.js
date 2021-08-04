import {
  createReducer,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { markAsSeen } from '../../services/axiosServices';
import {
  registerUser,
  userLogin,
  updateUserData,
} from '../../services/reduxServices';

import { deleteMatch, deleteMatchMentor } from '../../services/axiosServices';

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
  likedMentees: [],
  dislikedMentees: [],
  likedMentors: [],
  dislikedMentors: [],
  maxMentees: null,
  img: null,
  token: '',
  actualRole: '',
};

export const setUser = createAction('SET_USER');
export const getUser = createAsyncThunk('USER_LOG_IN', userLogin);
export const userRegister = createAsyncThunk('USER_REGISTER', registerUser);
export const updateUser = createAsyncThunk(
  'UPDATE_USER',
  async ({ url, data }, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState();
      const userUpdated = await updateUserData(data, user.token, url);
      userUpdated.token = user.token;
      return userUpdated;
    } catch (error) {
      console.log({ error });
    }
  },
);

export const cancelMatch = createAsyncThunk(
  'CANCEL_MATCH',
  async ({ data, token }, thunkAPI) => {
    try {
      const userUpdated = await deleteMatch(data, token);
      console.log(userUpdated);
      userUpdated.token = token;
      return userUpdated;
    } catch (error) {
      console.log({ error });
    }
  },
);

export const cancelMatchMentor = createAsyncThunk(
  'CANCEL_MATCH_MENTOR',
  async ({ data, token }, thunkAPI) => {
    try {
      const userUpdatedMentee = await deleteMatchMentor(data, token);
      console.log(userUpdatedMentee);
      userUpdatedMentee.token = token;
      return userUpdatedMentee;
    } catch (error) {
      console.log({ error });
    }
  },
);

export const deleteNotification = createAsyncThunk(
  'DELETE_NOTIFICATION',
  async (notificationId, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState();
      const userUpdated = await markAsSeen(notificationId, user.token);
      userUpdated.token = user.token;
      return userUpdated;
    } catch (error) {
      console.log({ error });
    }
  },
);

const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (_, action) => action.payload,
  [setUser]: (_, action) => action.payload,
  [userRegister.fulfilled]: (_, action) => action.payload,
  [updateUser.fulfilled]: (_, action) => action.payload,
  [cancelMatch.fulfilled]: (_, action) => action.payload,
  [cancelMatchMentor.fulfilled]: (state, action) => state,
  [deleteNotification.fulfilled]: (_, action) => action.payload,
});

export default userReducer;
