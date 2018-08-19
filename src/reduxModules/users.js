const GET_USERS_PENDING = 'GET_USERS_PENDING';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const JOIN_CREATE_LAB_PENDING = 'JOIN_CREATE_LAB_PENDING';
const JOIN_CREATE_LAB_SUCCESS = 'JOIN_CREATE_LAB_SUCCESS';
const JOIN_CREATE_LAB_FAILURE = 'JOIN_CREATE_LAB_FAILURE';

import { fetchUsers, joinOrCreateLab } from 'app/src/services/api';

const initialState = {
  error: false,
  loading: false,
  users: [],
  currentUser: {}
}

export default function users (state = initialState, action) {
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

    case JOIN_CREATE_LAB_PENDING:
      console.log('JOIN_CREATE_LAB_PENDING', action);
      return {
        ...state,
        currentUser: {},
        loading: true,
        error: null,
      }
    case JOIN_CREATE_LAB_SUCCESS:
      console.log('JOIN_CREATE_LAB_SUCCESS', action);
      const { currentUser } = action.data.data;
      return {
        ...state,
        loading: false,
        currentUser,
      }
    case JOIN_CREATE_LAB_FAILURE:
      console.log('JOIN_CREATE_LAB_FAILURE', action);
      return {
        ...state,
        loading: false,
        error: action.error.message || 'Invalid Pin Code',
      }

    default:
      return state
  }
}

// Thunk function:
export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_PENDING });
  return fetchUsers()
    .then(data => dispatch({ type: GET_USERS_SUCCESS, data }))
    .catch(error => dispatch({ type: GET_USERS_FAILURE, error }));
}

export const joinCreateLab = ({endpoint, invite_code, name}) =>  dispatch => {
  dispatch({ type: JOIN_CREATE_LAB_PENDING });
  return joinOrCreateLab({endpoint, invite_code, name})
    .then(data => dispatch({ type: JOIN_CREATE_LAB_SUCCESS, data }))
    .catch(error => dispatch({ type: JOIN_CREATE_LAB_FAILURE, error }));
}

// const getUsersSuccess = data => {
//   console.log('getUsersSuccess', data);
//   return { type: GET_USERS_SUCCESS, data }
// }
