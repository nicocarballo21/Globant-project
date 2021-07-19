import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import {API_URL} from '@env'

//------------------- Actions -------------------//
const setSkills = createAction('SET_SKILLS');
const getSkills = createAsyncThunk('GET_SKILLS', async () => {
  const res = await axios.get(API_URL + '/api/skills');
  const skills = await res.data;
  return skills
})

//------------------- Reducer -------------------//
const skillsReducer = createReducer(null, {
  [setSkills]: (state, action) => action.payload,
  [getSkills.fulfilled]: (state, action) => action.payload
});

export { setSkills, getSkills, skillsReducer };
