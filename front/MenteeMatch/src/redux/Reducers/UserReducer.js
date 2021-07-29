import {
  createReducer,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  registerUser,
  userLogin,
  updateUserData,
} from '../../services/reduxServices';

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
      userUpdated['token'] = user.token;
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
});

export default userReducer;
