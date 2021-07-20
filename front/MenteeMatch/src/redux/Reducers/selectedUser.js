import { createReducer, createAction } from '@reduxjs/toolkit';

//------------------- Actions -------------------//
const setSelectedUser = createAction('SET_SELECTED_USER');

//------------------- Reducer -------------------//
const selectedUserReducer = createReducer(
  {},
  {
    [setSelectedUser]: (state, action) => action.payload,
  },
);

export { setSelectedUser, selectedUserReducer };
