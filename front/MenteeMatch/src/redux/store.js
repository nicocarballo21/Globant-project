import {configureStore} from '@reduxjs/toolkit';
import {selectedUserReducer} from './Reducers/selectedUser';
import userReducer from './Reducers/UserReducer';
import {usersReducer} from './Reducers/usersReducer';
import {matchesReducer} from './Reducers/matchesReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
    matches: matchesReducer
  },
});

export default store;
