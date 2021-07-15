import { configureStore } from '@reduxjs/toolkit'
import { selectedUserReducer } from './selectedUser'
import { userReducer } from './user'
import { usersReducer } from './users'

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
  }
})

export default store