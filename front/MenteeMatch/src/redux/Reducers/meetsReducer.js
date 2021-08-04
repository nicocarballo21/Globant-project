import {
    createReducer,
    createAction,
    createAsyncThunk,
  } from '@reduxjs/toolkit';
  import {
    getMeets,
    createMeet,
    updateMeet,
    deleteMeet
  } from '../../services/reduxServices';
  
  
  export const pullMeets = createAsyncThunk('PULL_MEETS', getMeets);
  export const pushMeet = createAsyncThunk('PUSH_MEET', createMeet);
  export const reloadMeet = createAsyncThunk('RELOAD_MEET', updateMeet);
  export const removeMeet = createAsyncThunk('REMOVE_MEET', deleteMeet);

  
  const meetsReducer = createReducer([], {
    [pullMeets.fulfilled]: (_, action) => action.payload,
    [pushMeet.fulfilled]: (_, action) => action.payload,
    [reloadMeet.fulfilled]: (_, action) => action.payload,
    [removeMeet.fulfilled]: (_, action) => action.payload,
  });
  
  export default meetsReducer;
  