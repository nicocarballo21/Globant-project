import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { API_URL } from '@env';

export const getMatches = createAsyncThunk("GET_MATCHES", (roleToFind) => {
    if(!roleToFind) throw new Error("No role has been assigned")
    return axios.get(`${API_URL}/api/users/match/${roleToFind}`)
        .then(res => res.data)
})
export const matchesReducer = createReducer([], {
    [getMatches]: (state, action) => action.payload
})