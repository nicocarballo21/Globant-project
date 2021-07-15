import store from './store'
import { setUser, userReducer } from './user'
import { setUsers, usersReducer } from './users'
import { setSelectedUser, selectedUserReducer } from './selectedUser'

export default store
export {
  setUser,
  setUsers,
  setSelectedUser,
  userReducer,
  usersReducer,
  selectedUserReducer
}