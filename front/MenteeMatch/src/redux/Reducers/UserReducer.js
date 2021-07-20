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
  likes: [],
  disLikes: [],
  maxMentees: null,
  img: null,
  token: '',
};

export const setUser = createAction('SET_USER');
export const getUser = createAsyncThunk('USER_LOG_IN', userLogin);
export const userRegister = createAsyncThunk('USER_REGISTER', registerUser);
export const updateUser = createAsyncThunk(
  'UPDATE_USER',
  async (dataUser, thunAPI) => {
    const { user } = thunAPI.getState();
    console.log(user.token);
    const userUpdated = await updateUserData(
      dataUser,
      user.token,
      '/api/users/profile',
    );
    return userUpdated;
  },
);

const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (_, action) => action.payload,
  [setUser]: (_, action) => action.payload,
  [userRegister.fulfilled]: (_, action) => action.payload,
  [updateUser.fulfilled]: (_, action) => action.payload,
});

export default userReducer;
