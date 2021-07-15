import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";

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
  abilities: [],
  peopleILike: [],
  peopleIDislike: [],
  matchs: [],
}

//------------------- Actions -------------------//
const setUser = createAction('SET_USER')
/* const getUser = createAsyncThunk('LOGIN_GET_USER', getUserService) */

//------------------- Reducer -------------------//
const userReducer = createReducer(initialState, {
  [setUser] : (state, action) => { state.user = action.payload }
})

export { setUser, userReducer }