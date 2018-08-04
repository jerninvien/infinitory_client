const GET_USERS_PENDING = 'GET_USERS_PENDING';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

import { fetchUsers } from 'app/src/services/api';

const initialState = {
  error: false,
  loading: false,
  users: [],
}

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      console.log('GET_USERS_PENDING', action);
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
      }
    case GET_USERS_SUCCESS:
      console.log('GET_USERS_SUCCESS', action);
      const users = action.data.data.results;
      return {
        ...state,
        loading: false,
        users,
      }
    case GET_USERS_FAILURE:
      console.log('GET_USERS_FAILURE', action);
      return {
        ...state,
        loading: false,
        error: action.error.message,
      }
    default:
      return state
  }
}

// Thunk function:
export const getUsers = () => {
  console.log('fetchUserzz');
  return dispatch => {
    dispatch({ type: GET_USERS_PENDING });
    fetchUsers()
      .then(data => dispatch({ type: GET_USERS_SUCCESS, data }))
      .catch(error => dispatch({ type: GET_USERS_FAILURE, error }));
  }
}

// const getUsersPending = () => {
//   console.log('getUsersPending');
//   return { type: GET_USERS_PENDING }
// }

// const getUsersSuccess = data => {
//   console.log('getUsersSuccess', data);
//   return { type: GET_USERS_SUCCESS, data }
// }
//
// const getUsersFailure = error => {
//   console.log('getUsersFailure', error);
//   return { type: GET_USERS_FAILURE, error }
// }
